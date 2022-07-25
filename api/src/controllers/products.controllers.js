const axios = require("axios");
require("dotenv").config();
const { conn } = require("../db.js");
const { Products, Categories_Products, Categories } = conn.models;
const { Op } = require('sequelize');
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

      const productsBdByName = await Products.findAll({
        where : {
          name : { [Op.iLike]: `%${name}%`}},
        include : { model: Categories },
        limit : 15
      });
    
      if (productsBdByName.length > 0) return res.send(productsBdByName);
      else return res.status(404).send('Product not found');
    }
  },
  getPrice: async(req,res)=>{
    const productsBd = await Products.findAll({
      include: { model: Categories },
    });
    if(!!req.query.order && req.query.order=="Asc"){
    productsBd.sort(function(a, b) {
      if (Number(a.price) > Number(b.price)) {
        return 1;
      }
      if (Number(a.price)  < Number(b.price)) {
        return -1;
      }
      return 0;
    });
      if(!!req.query.min &&!!req.query.max && Number(req.query.min)<Number(req.query.max)){
        const result1 = productsBd.filter(elemt => Number(elemt.price) > Number(req.query.min));
        const result = result1.filter(elemt => Number(elemt.price) < Number(req.query.max));
        return res.send(result);
      }
      else if(!!req.query.min){
        const result = productsBd.filter(elemt => Number(elemt.price) > Number(req.query.min));
        return res.send(result);
      }
      else if(!!req.query.max){
        const result = productsBd.filter(elemt => Number(elemt.price) < Number(req.query.max));
        return res.send(result);
      }
      else 
        return res.send(productsBd);
    }
    if(!!req.query.order && req.query.order=="Desc"){
      productsBd.sort(function(a, b) {
        if (Number(a.price) < Number(b.price)) {
          return 1;
        }
        if (Number(a.price)  > Number(b.price)) {
          return -1;
        }
        return 0;
      });
      if(!!req.query.min &&!!req.query.max && Number(req.query.min)<Number(req.query.max)){
        const result1 = productsBd.filter(elemt => Number(elemt.price) > Number(req.query.min));
        const result = result1.filter(elemt => Number(elemt.price) < Number(req.query.max));
        return res.send(result);
      }
      else if(!!req.query.min){
        const result = productsBd.filter(elemt => Number(elemt.price) > Number(req.query.min));
        return res.send(result);
      }
      else if(!!req.query.max){
        const result = productsBd.filter(elemt => Number(elemt.price) < Number(req.query.max));
        return res.send(result);
      }
      else 
        return res.send(productsBd);
    }
    else if(!!req.query.min || !!req.query.max ){
      if(!!req.query.min &&!!req.query.max && Number(req.query.min)<Number(req.query.max)){
        const result1 = productsBd.filter(elemt => Number(elemt.price) > Number(req.query.min));
        const result = result1.filter(elemt => Number(elemt.price) < Number(req.query.max));
        return res.send(result);
      }
      else if(!!req.query.min){
        const result = productsBd.filter(elemt => Number(elemt.price) > Number(req.query.min));
        return res.send(result);
      }
      else if(!!req.query.max){
        const result = productsBd.filter(elemt => Number(elemt.price) < Number(req.query.max));
        return res.send(result);
      }
    }
    else   return res.status(404).send("Ingrese una Query permitida");
  },

  filterByCategories : async ( req, res) => {
    try {
        
      const productsBd = await Products.findAll({
        include: { model: Categories },
      });

      const categoryQuery = req.query.cat

      const filterCategory = productsBd.filter(el => el.Categories?.map(el => el.name.toLowerCase()) == categoryQuery.toLowerCase() )

      if(categoryQuery){
        res.status(202).send(filterCategory)
      }else res.status(200).send(productsBd)
    
    } catch (error) {
      console.log('Flag log filterByCategory', error) 
    }
  },

  getOrderByName : async (req, res) => {
    const {order} = req.query;

    try {
      const productsBd = await Products.findAll({
        include: { model: Categories },
      });

      let sortedByName = order === 'A-Z' ?
      productsBd.sort(function (a, b){
          if(a.name.toString() > b.name.toString()) return 1;
          if(b.name.toString() > a.name.toString()) return -1;
          return 0;
      }) : 
      productsBd.sort(function(a,b){
          if(a.name.toString() > b.name.toString()) return -1;
          if(b.name.toString() > a.name.toString()) return 1;
          return 0;
      });

      res.send(sortedByName);
      
    } catch (error) {
      console.log(error)
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
  },

  getProductsByBrand : async (req, res) => {
    try {
      const { name } = req.query;
      const products = await Products.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%`}
        },
        include: {
          model: Categories,
        },
      });
      if (!products.length) return res.send(' Product not found');

      else return res.send(products);

    } catch (error) {
      console.log(error);
    }
  },

  getAllBrand : (req, res) => {
    let brandArr = [];
    let brandMap = productList.map((el) => {
        let brand = el.brand;
        
        brandArr.push(brand)
    });

    let brandFlat = brandArr.flat();

    const brandSet = new Set(brandFlat);
    const brandResult = Array.from(brandSet)

    res.send(brandResult)
  }

};
