const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());

const Router = require('./src/Routes/api');
app.use('/api', Router);

app.use((req, res,) => {
    res.status(404).send('404 Not Found');
  });

  

  module.exports = app;
