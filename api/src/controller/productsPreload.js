const productList = require('../asset/productList');
const {Products} = require('../db')

const preload = () => {
    const upToDb = productList.map(async el => {
        await Products.findOrCreate({
            where:{
                name: el.name,
                image: el.image,
                price: el.price,
                stock: el.quantity,
                brand: el.brand,
                rating: el.calification,
                description: el.description.trim(),
            },
           
        })
    })
}

module.exports = preload