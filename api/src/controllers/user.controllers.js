const axios = require('axios');
require('dotenv').config();
const { Users } = require('../db.js');



module.exports = {


//Buscar usuario por email
getUserByEmail : async (req, res) => {
    const { email } = req.params;
    try{
        const user = await Users.findOne({
            where: {
                email: email
            }
        });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({ error: "User didnt found" + error})
    }
},

// Buscar usuario por nombre
getUserByName : async (req, res) => {
    const { name } = req.params;
    try{
        const user = await Users.findOne({
            where: {
                name: name
            }
        });
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({ error: "User didnt found" + error})
    }
},

//Traer todos los usuarios
getUsers : async (req, res) => {
    try{
        const users = await Users.findAll()
        res.send(users)
    }catch(error){
        res.status(404).send(error)

    }
},


//Ver bien que datos son los que vamos a modificar, segun los datos que nos proporcione Auth0
updateUsers : async (req, res) =>{
    const { email ,firstname , lastname, address } = req.body;
    try{
        const users = await Users.update({
            email: email,
            firstname: firstname,
            lastname: lastname,
            address:address
        });
        res.status(200).json({msg: "User Updated", users})
    }catch(error){
        res.status(404).json({ error: "Update failed", error})

    }
}



};