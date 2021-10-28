const router = require("express").Router();

const appController = require('../controllers/appController.js');

console.log(appController);
router.get("/list/:parameter", appController.getList);
router.get("/userInfo", appController.getuserInfo);
router.post("/order", appController.postOrder);
router.get("/myorders", appController.getMyOrders);
router.get("/adminorders", appController.getAdminOrders);
router.post("/deleteorder/:id", appController.deleteOrders);


module.exports = router;