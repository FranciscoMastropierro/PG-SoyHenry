const { Router } = require("express");
const router = Router();
const {deleteFavorite,favoritePost} = require('../controllers/product.favorite')

router.post("/", favoritePost);

router.delete("/", deleteFavorite)

module.exports = router;