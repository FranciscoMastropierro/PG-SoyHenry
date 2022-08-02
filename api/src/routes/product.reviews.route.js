const { Router } = require("express");
const router = Router();
const {createAndAddComment,getCommentsbyProduct,editComment,deleteCommentById} = require('../controllers/product.reviews')

router.post("/", createAndAddComment);

router.get("/", getCommentsbyProduct);

router.put("/", editComment)

router.delete("/", deleteCommentById)

module.exports = router;