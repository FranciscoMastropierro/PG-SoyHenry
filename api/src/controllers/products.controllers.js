const axios = require("axios");
require("dotenv").config();
const { conn } = require("../db.js");
const { Products, Categories_Products, Categories } = conn.models;
const { Op } = require("sequelize");
const productList = require('../asset/productList');


module.exports = {
  getProducts: async (req, res) => {
    const { name } = req.query;

    if (!name) {
      const productsBd = await Products.findAll({
        include: { model: Categories },
      });
    

      if (productsBd.length > 0) return res.send(productsBd);
      else return res.status(404).send('Products not found');


    } else {
      const productsBd = await Products.findAll({
        where: {name: { [Op.substring]: name }},
        include: { model: Categories },
        limit : 15
      });
    
      if (productsBd.length > 0) return res.send(productsBd);
      else return res.status(404).send('Product not found');
    }
  },

  postProduct: async (req, res) => {
    const products = req.body;
    console.log(req.body)

    //name image price stock brand rating description 
    try {
      if (!products.name || !products.price || !products.brand)
        return res
          .status(400)
          .send({ error: "Not all fields are required, but..." });

     const product = await Products.create(products);

      // console.log(videogame)

      products.categories.forEach(
        async (e) => await product.addCategories(e, { through: Categories_Products })
      );

      res.send({ msj: `Product added`, data: product.dataValues });
    } catch (error) {
      console.error(error);
    }
  },

  preLoadProducts : async () =>{
    const upToDb = productList.map( async(el) => {
      const categories = await Categories.findAll();
      const { id } = categories.find(elemt => elemt.name == el.categories.toString())
      const product = await Products.create({
              name: el.name,
              image: el.image,
              price: el.price,
              stock: el.quantity,
              brand: el.brand,
              rating: el.calification,
              description: el.description.trim(),
      });
      //console.log(Products.__proto__)
      await product.addCategories(id, { through: Categories_Products })
    })
  }
};
