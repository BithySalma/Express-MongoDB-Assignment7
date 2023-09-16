const express = require('express');
const app = express();
const Router = require('./src/Routes/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
app.use(rateLimit());


app.get("/",(req,res)=>{
  res.send("This is home")
})
app.use('/api', Router);


app.use((req, res,) => {
    res.status(404).json('404 Not Founded');
  });

  

  module.exports = app;
