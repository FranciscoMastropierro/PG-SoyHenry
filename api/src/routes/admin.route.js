const { Router } = require("express");
const router = Router();
const {banUser, upgradeToAdmin} = require('../controllers/admin.controllers')

router.get("/ban", banUser);

router.get("/upgrade", upgradeToAdmin);


module.exports = router;