const axios = require('axios');
require("dotenv").config();
const { User, Products, Commentary } = require('../db.js')


module.exports = {

     addReview : async (req, res) => {
        let { email, text, name} = req.body;  
        try {
            
            let productCheck = await Products.findOne({where :{name}})
            let user = await User.findOne({
                where :{ 
                    email: email,
                },
            })
    
            let newCommentary = await Commentary.create({
                    
                    text,
                    email : user.email
            })
            await productCheck.addCommentary(newCommentary)

            res.status(200).json(newCommentary)
        }catch(error) {
            console.log(error)
    
        }
    },


     deleteReview : async (req, res) => {
        try{
            const commentaryId = req.params.id;
    
            await Commentary.destroy({where :{id: commentaryId}})
            
            res.send('Deleted Commentary');
    
        }catch(error){
            console.log(error)
        }
    },

    getReviews : async (req, res) =>{
        try{
            
            const commentary = await Commentary.findAll()
         
            if(commentary) {
                res.status(200).json(commentary);
            } else {
                res.status(404).json('No Commentary available')
            }
    
        }catch(error){
            console.log(error)
    
        }
    }

    








}