const router = require("express").Router();
const ordermodel = require("../models/ordermodels/ordermodel");

const returnLists = require("../utils/sendLists");
router.get("/list/:parameter", async (req, res) => {

    try {
        const lists = await returnLists(req.params.parameter);
        res.status(200).json({ status: "success", data: lists });
    } catch (err) {
        res.status(404).json({ status: "fail", err: err.message });
    }
})

router.get("/userInfo", (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send(false);
    }
});


router.post("/order", async (req, res) => {
    try {
        const order = await ordermodel.create(req.body);
        res.status(201).json({ status: 'success', order });
    } catch (err) {
        res.status(404).json({ status: 'fail' });
    }
});


router.get("/myorders", async (req, res) => {
    try {
        if (!req.user) {
            res.status(404).json({ status: 'fail', message: 'you are not logged in please login first' });
            return 0;
        }
        const orders = await ordermodel.find({ userId: req.user._id });
        res.status(200).send({ status: 'success', orders });
    } catch (err) {
        res.status(404).json({ status: 'fail', message: 'something went wrong please reload again to see changes' });
    }
})

router.get("/adminorders", async (req, res) => {
    try {
        const order = await ordermodel.find().populate('userId');
        res.status(200).json({ status: 'success', orders: order })
    } catch (err) {
        res.status(404).json({ status: 'fail', message: "some thing went very wrong please reload to see changes" });
    }
});

router.post("/deleteorder/:id", async (req, res) => {
    try {
        const deletedOrder = await ordermodel.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: 'success', order: deletedOrder });
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ status: 'fail', message: "something went very wrong" });
    }
})


module.exports = router;