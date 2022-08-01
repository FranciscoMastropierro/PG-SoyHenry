const axios = require("axios");
require("dotenv").config();
const { Users } = require("../db.js");

module.exports = {
  //Traer todos los usuarios
  getUsers: async (req, res) => {
    try {
      const users = await Users.findAll();
      res.send(users);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  getUsersFull: async (req, res) => {
    let user = await Users.findAll({
      include: [
        { association: "useraddresses", through: { attributes: [] } },
        { association: "comments", through: { attributes: [] } },
        { association: "favorites", through: { attributes: [] } },
        { association: "reviews", through: { attributes: [] } },
      ],
    });
    if (!user.length) throw new Error("There are no users");
    return user;
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await Users.findOne({ where: { id } });
      res.send(user);
    } catch (error) {
      // console.log(error)
      res.status(404).send(error);
    }
  },

  //Ver bien que datos son los que vamos a modificar, segun los datos que nos proporcione Auth0
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;

    user.isAdmin = false;
    try {
        const backUser = Users.findOne({ where: { id } })
        if (backUser.disable)
        return res
          .status(404)
          .send({
            error: `User ${backUser.username} Disable`,
          });
        const aux = await Users.update(user, { where: { id } });

        res.status(200).send({msj : `User update`});
    } catch (error) {
        res.status(404).send(error)
    }
  },
  postUser: async (req, res) => {
    const { email, firstname, lastname, address, postalCode, username } =
      req.body;

    try {
      const user = await Users.create({
        email,
        firstname,
        lastname,
        address,
        postalCode,
        username,
      });

      res.send({ msg: "User Created", user });
    } catch (error) {
      console.log(error);
      res.status(404).send({ error: "Can not post user", error });
    }
  },
  changeRole: async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;

    try {
      const backUser = Users.findOne({ where: { id } });
      if (user.isAdmin) {
        const newAdmin = await Users.update(
          { isAdmin: true, disable : false },
          { where: { id } }
        );

        return res.send({
          msj: `User ${newAdmin.firstname} ${newAdmin.lastname} new Admin`,
        });
      } if (!user.disable){
        const activeUser = await Users.update(
          { disable: false },
          { where: { id } }
        );
          return res.send({
          msj: `User ${activeUser.firstname} ${activeUser.lastname} active`,
        });
      }else {
        res.status(404).send({msj : `Invalid params`})
      }
    } catch (error) {
      return res.status(404).send(error);
    }
  },

  deleteUser : async (req, res) => {
    const { id } = req.params;
    try {
      const backUser = Users.findOne({ where: { id } })
      if (backUser.email){
        await Users.destroy({ where: { id } })
        res.send({msj : `User ${backUser.email} delete` })
      } else {
        res.status(404).send({msj : `User not found : ${id}` })
      }
    } catch (error) {
      res.status(404).send(error)
    }
   
  }
};