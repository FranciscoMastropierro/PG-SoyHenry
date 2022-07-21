const axios = require('axios');
require('dotenv').config();
const { Categories } = require('../db.js');



module.exports = {
    
    getCategories : async (req, res) =>{
        try {
            // Find all categories
            const categories = await Categories.findAll();

            return res.send(categories);
        
        } catch (error) {
            console.error(error);
        }

    },

};