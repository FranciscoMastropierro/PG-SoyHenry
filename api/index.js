const server = require('./src/app.js');
const {preload, preloadCate} = require('./src/controller/productsPreload.js');
const { conn } = require('./src/db.js');




const port= process.env.PORT || 3001;
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    preload();
    preloadCate();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});