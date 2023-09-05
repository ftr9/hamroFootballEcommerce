const router = require('express').Router();

const appController = require('../controllers/appController.js');
router.get('/list/:parameter', appController.getList);
router.get('/userInfo', appController.getuserInfo);

router.get('/myorders', appController.getMyOrders);
router.get('/adminorders', appController.getAdminOrders);
router.post('/deleteorder/:id', appController.deleteOrders);

/**Payment Part */
router.post('/stripe', appController.StripePayment);
router.post('/order', appController.postOrder);

module.exports = router;
