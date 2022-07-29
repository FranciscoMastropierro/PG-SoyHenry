const axios = require("axios");
require("dotenv").config();
const { Order, Users, Products, Products_Orders } = require("../db.js");

module.exports = {
  getOrderById: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findOne({
        where: { id },
        include: {
          model: Products,
        },
      });

      res.send(order);
    } catch (error) {
      console.log(error);
    }
  },

  postOrder: async (req, res) => {
    //products array de objetos con products ID + quantity
    const { UserId, products, address, postalCode } = req.body;
    
    try {
      if (!UserId || !Object.keys(products))
        res.status(403).send({ msj: "Invalid params" });
      Users.findOne({ where: { id : UserId } }).then(user=>{
        const aux = {
        UserId,
        amount: products
          .map((e) => e.quantity * e.price)
          .reduce((prev, next) => prev + next),
        shipmentAddress: address ? address : user.address,
        postalCode: postalCode ? postalCode : user.postalCode,
         };
        Order.create(aux).then(order=>{
          products.forEach(async (p) => {
          try {
          order.addProducts(p.id, { through: { unitPrice: p.price,quantity: p.quantity}}).then(respuesta=>{
            res.send({msj: 'Order Created', respuesta})
          });
        } catch (error) {
         console.log(error);   
        }
        });
      });
      })
    } catch (error) {
      console.log(error);
      res.status(403).send('Fail create order')
    }
  },
};
