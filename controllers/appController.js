const ordermodel = require('../models/ordermodels/ordermodel');
const serverEvent = require('../utils/orderEvent');
const returnLists = require('../utils/sendLists');
const stripe = require('stripe')(process.env.STRIPE_SECRETKEY);

serverEvent.on('OrderChange', async data => {
  console.log(data);
  try {
    await ordermodel.findByIdAndUpdate(data.orderId, {
      orderStatus: data.status,
    });
  } catch (err) {
    console.log(err);
  }
});

exports.getList = async (req, res) => {
  try {
    const lists = await returnLists(req.params.parameter);
    res.status(200).json({ status: 'success', data: lists });
  } catch (err) {
    res.status(404).json({ status: 'fail', err: err.message });
  }
};
exports.getuserInfo = (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send(req.oidc.user);
  } else {
    res.send(false);
  }
};
exports.postOrder = async (req, res) => {
  try {
    const order = await ordermodel.create({
      userEmail: req.oidc.user.email,
      userName: req.body.name,
      confirmationEmail: req.body.confirmationEmail,
      orders: req.body.carts,
      phone: req.body.phoneNumber,
      location: req.body.location,
      paymentType: req.body.paymentType,
    });
    res.status(201).json({ status: 'success', order });
  } catch (err) {
    res.status(404).json({ status: 'fail' });
  }
};
exports.getMyOrders = async (req, res) => {
  try {
    if (!req.oidc.isAuthenticated()) {
      res.status(200).json({
        status: 'fail',
        message: 'you are not logged in please login first',
      });
      return;
    }
    const orders = await ordermodel
      .find({
        userEmail: req.oidc.user.email,
      })
      .sort('-createdAt');
    res.status(200).send({ status: 'success', orders });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: 'something went wrong please reload again to see changes',
    });
  }
};
exports.getAdminOrders = async (req, res) => {
  try {
    const order = await ordermodel.find().sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', orders: order });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'some thing went very wrong please reload to see changes',
    });
  }
};
exports.deleteOrders = async (req, res) => {
  try {
    const deletedOrder = await ordermodel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'success', order: deletedOrder });
  } catch (err) {
    console.log(err.message);
    res
      .status(404)
      .json({ status: 'fail', message: 'something went very wrong' });
  }
};

exports.StripePayment = async (req, res) => {
  try {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.stripeToken.id,
      description: 'football payment',
    });

    const order = await ordermodel.create({
      userEmail: req.oidc.user.email,
      userName: req.body.name,
      confirmationEmail: req.body.confirmationEmail,
      orders: req.body.carts,
      phone: req.body.phoneNumber,
      location: req.body.location,
      paymentType: req.body.paymentType,
    });
    res.status(201).json({ status: 'success', order });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail' });
  }
};
