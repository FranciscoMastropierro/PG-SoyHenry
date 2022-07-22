const axios = require("axios");
require("dotenv").config();
const { conn } = require("../db.js");
const { Products, Categories_Products, Categories } = conn.models;


module.exports = {
  getProducts: async (req, res) => {
    const { name } = req.query;

    const productsBd2 = await Products.findAll({
      include: { model: Categories },
    });

    // se creo variable improvisada para poder recibir todos los productos y no necesite un name de manera obligatoria
    // se requeria el name a fuerza para poder enviar todos los productos, con esta variable ya no sucede eso
    // esto totalmente provisional

    if (name) {
      const productsBd = await Products.findAll({
        include: { model: Categories },
      });
    

      if (productsBd.length > 0) return res.send(productsBd);
      else return res.status(404).send('Product not found');


    } else return res.status(200).send(productsBd2);
  },

  postProduct: async (req, res) => {
    const { products } = req.body;
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
};
