const express = require('express');
const app = express();
const path = require('path');
const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');
dotenv.config({ path: './config/keys.env' });

if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('short'));
}

app.use(express.json());

//AUTHO_By_OKTA
const { config } = require('./config/AuthConfig');

app.use(auth(config));

//SAMPLE

app.get('/user', (req, res) => {
  res.status(200).json(req.oidc.user);
});

const appRoute = require('./routes/appRoute');
app.use('/api/v1/hamrofootball', appRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
