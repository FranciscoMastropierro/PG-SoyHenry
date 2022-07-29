const axios = require('axios');
require('dotenv').config();
const { conn } = require('../db.js');
const {Products, Categories} = conn.models;

module.exports = {
    getProductDetail : async (req, res) =>{
        const {id} = req.params;
       
            try {
                // console.log(Genre.__proto__)
                const product = await Products.findOne({
                    where: {id},
                    include : {
                        model :Categories
                    }
                });

                 res.send(product);

            } catch (error) {
                console.log(error);
                res.status(404).send('Product not found');
            }
        
    },

    deleteProduct : async (req, res) =>{
        const {id} = req.params;
        try {
           
            await Products.destroy({where :{id}})

            res.status(200).send('Produtc deleted!')

        } catch (error) {
            console.log(error);
            res.status(404).send(error);
        }

    },


    putProduct : async (req, res) => {
        const { name, brand, image, price, categories } = req.body;
        const { id } = req.params;

        try{
            const updating = await Products.update({
                name: name,
                brand: brand,
                image: image,
                price: price,
                categories: categories,
            }, {
                where: {
                    id: id
                }
            });
            let newCategorie = await Categories.findOne({
                where :{
                    name: categories
                }
            })
            let updateProduct = await Products.findOne({
                where: {
                    id : id
                }
            })
            await updateProduct.setCategories(newCategorie)
            res.status(200).send(updateProduct)

        }catch (error){
            res.status(404).send('Error')

        }


    }
};