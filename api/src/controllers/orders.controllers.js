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

      const user = await Users.findOne({ where: { id : UserId } });
      const aux = {
        UserId,
        amount: products
          .map((e) => e.quantity * e.price)
          .reduce((prev, next) => prev + next),
        shipmentAddress: address ? address : user.address,
        postalCode: postalCode ? postalCode : user.postalCode,
      };
      console.log(aux)

      const order = await Order.create(aux);
      
      products.forEach(async (p) => {
        try {
        const aux2 = {
          ProductId: p.id,
          quantity: p.quantity,
          unitPrice: p.price,
        };
        console.log(aux2)
        await order.addProducts(aux2, { through: Products_Orders });
        res.send({msj: 'Order Created', order})
      } catch (error) {
       console.log(error);   
      }
      });
    } catch (error) {
      console.log(error);
      res.status(403).send('Fail create order')
    }
  },
};
