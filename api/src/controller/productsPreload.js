const productList = require('../asset/productList');
const {Products, Categories} = require('../db');


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
           
        });
    })
}


const preloadCate = () => {
    try {
    
        let cateArr = [];
        let cateMap = productList.map((el) => {
            let cate = el.categories;
            
            cateArr.push(cate)
        });

        let cateFlat = cateArr.flat();

        const cateSet = new Set(cateFlat);
        const cateResult = Array.from(cateSet)

        const cateUpToDb = cateResult.map(async el => {
            await Categories.findOrCreate({
                where:{name: el}
            })
        })

        console.log(cateResult)


    } catch (error) {
        console.log(error)
    }
}




module.exports = {preload, preloadCate}