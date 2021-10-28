const ordermodel = require("../models/ordermodels/ordermodel");
const serverEvent = require("../utils/orderEvent");
const returnLists = require("../utils/sendLists");
const stripe = require("stripe")(process.env.STRIPE_SECRETKEY);

serverEvent.on("OrderChange", async (data) => {
    try {
        await ordermodel.findByIdAndUpdate(data.orderId, {
            orderStatus: data.status
        })
    } catch (err) {
        console.log(err);
    }
})

exports.getList = async (req, res) => {

    try {
        const lists = await returnLists(req.params.parameter);
        res.status(200).json({ status: "success", data: lists });
    } catch (err) {
        res.status(404).json({ status: "fail", err: err.message });
    }
}
exports.getuserInfo = (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send(false);
    }
}
exports.postOrder = async (req, res) => {
    try {
        const order = await ordermodel.create(req.body);
        res.status(201).json({ status: 'success', order });
    } catch (err) {
        res.status(404).json({ status: 'fail' });
    }
}
exports.getMyOrders = async (req, res) => {
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
}
exports.getAdminOrders = async (req, res) => {
    try {
        const order = await ordermodel.find().populate('userId').sort({ createdAt: -1 });
        res.status(200).json({ status: 'success', orders: order })
    } catch (err) {
        res.status(404).json({ status: 'fail', message: "some thing went very wrong please reload to see changes" });
    }
}
exports.deleteOrders = async (req, res) => {
    try {
        const deletedOrder = await ordermodel.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: 'success', order: deletedOrder });
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ status: 'fail', message: "something went very wrong" });
    }
}


exports.StripePayment = async (req, res) => {

    try {
        await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            source: req.body.stripeToken.id,
            description: 'football payment'

        });

        const order = await ordermodel.create(req.body.mainOrder);
        res.status(201).json({ status: 'success', order });
    } catch (err) {

        console.log(err);
        res.status(404).json({ status: 'fail' });
    }


}


