const {  Products,Users,Favorites } = require("../db.js");

module.exports = {
  favoritePost : async (req, res) => {
    const {idProducts,idUser}=req.body
    Users.findByPk(idUser).then((user) => {
      Products.findByPk(idProducts).then  (async(product) => {
        user.addProducts(product).then(respuesta=>{
          res.send({ respuesta}) } )
      }).catch((err) => {
        return res.status(404).send(err)
      });
 
    }).catch((err) => {
      return res.status(404).send(err)
    });
    
},
  deleteFavorite : async (req, res) => {
    const{idProducts,idUser}=req.body;
    await Favorites.destroy({ where: { ProductId: idProducts, UserId:idUser } });
    return res.send('the favorite was deleted')
}
}