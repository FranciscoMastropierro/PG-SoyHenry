const server = require('./src/app.js');
const {preLoadCategories} = require('./src/controllers/categories.controllers.js')
const {preLoadProducts} = require('./src/controllers/products.controllers.js')
const { conn } = require('./src/db.js');
const { Categories, Products, Categories_Products } = conn.models;




const port= process.env.PORT || 3001;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    try {
      const categories = [{name: 'Keyboards'}, {name:'Mouses'}, {name:'Laptops'}, {name:'Headsets'}, {name:'Monitors'}];  
      await Categories.bulkCreate(categories);

    } finally{
      preLoadProducts();
    }  
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});