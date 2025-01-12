// config env
require('dotenv').config({path:"./config/config.env"});
const express = require('express');
const cors = require('cors');
const app = express();

//middleare
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Use CORS middleware
app.use(cors());
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
// routes
const expenseRouter = require('./router/expenseRouter');
app.use('/api/expense', expenseRouter);

const userRouter = require('./router/userRouter');
app.use('/api/user', userRouter);

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: 'Server Error',
        error: err.message
    });
});

//test api
app.get('/', (req, res) => {
    res.status(201).json({success:true,message: 'API is working'});
});


module.exports = app;