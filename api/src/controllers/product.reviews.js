require("dotenv").config();
const { Commentary, Users, Products } = require("../db.js");

module.exports = {
 createAndAddComment : async (req, res) => {
  try {
    const { text, productId,userId } = req.body;
    if(!text){
      return res.status(400).json({ error: "Ingrese un comentario" })
    }
    if(!productId){
      return res.status(400).json({ error: "Ingrese Id del producto" })
    }
    if(!userId){
      return res.status(400).json({ error: "Ingrese Id del usuario" })
    }

    Users.findOne({ where: { id: userId } }).then((user) => {
      Products.findOne({ where: { id: productId } }).then(async (product)=>{
        const newComment = await Commentary.create({
          text: text,
        });
        await user.addCommentary(newComment);
        await product.addCommentary(newComment);
        Commentary.findOne({ where: { id: newComment.id } }).then((coment)=>{
          return res.json({Commentary:coment, Users:user,Products:product })
        })
      }).catch((err) => {
      return res.status(400).json({ err })
    })
      
    }).catch((err) => {
      return res.status(400).json({ err })
    });;
    }
  catch (err) {
    console.log(err);
    return res.send('usuario o producto no encontrado');
  }
},
getCommentsbyProduct : async (req, res) => {
  const  {productId}=req.query
  try {
    const aux=[]
    const comments = await Commentary.findAll({
      where: { ProductId: productId },
    })
      for await  (let comment of comments) {
        const user= await Users.findOne({
          where: {
            id: comment.dataValues.UserId,
          },
        })
          comment.dataValues.userInfo = {
            firstname: user.dataValues.firstname,
            lastname: user.dataValues.lastname,
            email: user.dataValues.email,
            username: user.dataValues.username,
            profileImage: user.dataValues.profileImage
          };
          aux.push(comment.dataValues);
      }
      if (aux.length) {
        return res.json(aux)
      } else {
        return res.json({ error: 'no hay comentarios sobre este producto' })
      }
  } catch (err) {
    console.log(err);
    return res.json({ error: 'no hay comentarios sobre este producto' });
  }
},
editComment: async (req, res) => {
  try {
    const { id, newComment } = req.body;
    if(!id || !newComment){
    return { error: 'ingrese toda la informacion' };
    }
    const comment = await Commentary.findOne({ where: { id: id } });
    if (comment) {

      comment.text = newComment;
      
      comment.save();
      return res.send(comment);
    }
  } catch(err){
    console.log(err);
    return res.send(err);
  }
},
deleteCommentById : async (req, res) =>  {
  try {
    const{id}=req.query
    if(!id){
      return res.send("ingrese id del comentario");
    }
    const comment = await Commentary.findOne({ where: { id: id } });
    if (comment) {
      await comment.destroy({
        where: {
          id: id,
        },
      });
      return res.send("Comentario eliminado");
    }
    else{
      return res.send("comentario no encontrado ingrese id correctamente");
    }
  } catch(err){
    console.log(err);
    return res.send(err);
  }
}

}