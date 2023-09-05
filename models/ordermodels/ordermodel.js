const mongoose = require('mongoose');

/**
 * {
[0]   given_name: 'Rahul',
[0]   family_name: 'Dotel',
[0]   nickname: 'csit191806_rahul',
[0]   name: 'Rahul Dotel',
[0]   picture: 'https://lh3.googleusercontent.com/a/AAcHTtcIrqYmR4DKpJQBWrf2-o_vSHFOIiWxJ7IS1rfnI3E46A=s96-c',
[0]   locale: 'en',
[0]   updated_at: '2023-09-04T09:48:06.349Z',
[0]   email: 'csit191806_rahul@achsnepal.edu.np',
[0]   email_verified: true,
[0]   sub: 'google-oauth2|117550720600729470765',
[0]   sid: 'CR3HZrkOjS4SKQrebTX2emgQqjsFOzzz'
[0] }
[0] {
[0]   name: 'sdcdsc',
[0]   confirmationEmail: 'dscdsc',
[0]   phoneNumber: 'dscdscdsc',
[0]   location: 'dscdscdsc',
[0]   stripeToken: {
[0]     id: 'tok_1NmmqxDkjhJecBfyZEb9u440',
[0]     object: 'token',
[0]     card: {
[0]       id: 'card_1NmmqxDkjhJecBfyTCHU0Nxs',
[0]       object: 'card',
[0]       address_city: null,
[0]       address_country: null,
[0]       address_line1: null,
[0]       address_line1_check: null,
[0]       address_line2: null,
[0]       address_state: null,
[0]       address_zip: null,
[0]       address_zip_check: null,
[0]       brand: 'Visa',
[0]       country: 'US',
[0]       cvc_check: 'unchecked',
[0]       dynamic_last4: null,
[0]       exp_month: 11,
[0]       exp_year: 2023,
[0]       funding: 'credit',
[0]       last4: '4242',
[0]       name: 'dcsdcdd@gmaik.com',
[0]       tokenization_method: null,
[0]       wallet: null
[0]     },
[0]     client_ip: '202.51.92.118',
[0]     created: 1693872647,
[0]     email: 'dcsdcdd@gmaik.com',
[0]     livemode: false,
[0]     type: 'card',
[0]     used: false
[0]   },
[0]   paymentType: 'payed digitally'
[0] }


 */
const orderSchema = new mongoose.Schema(
  {
    userEmail: {
      type: 'string',
      required: true,
    },
    userName: {
      type: 'string',
      required: true,
    },
    confirmationEmail: {
      type: 'string',
      required: true,
    },
    orders: {
      type: Object,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },

    orderStatus: {
      type: String,
      default: 'not seen',
    },
    paymentType: {
      type: 'String',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('orders', orderSchema);
