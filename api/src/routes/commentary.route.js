const { Router } = require("express");
const router = Router();
const {addReview, deleteReview, getReviews} = require('../controllers/commentary.controller.js')

router.get("/", getReviews);

router.post("/create", addReview);

router.delete("/delete/:id", deleteReview);



module.exports = router;