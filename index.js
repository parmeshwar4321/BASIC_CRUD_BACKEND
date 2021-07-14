const express = require("express")
const userRouters=require('./router/index')
const bodyParser= require('body-parser');
const app = express();
require('dotenv').config()
const Port=process.env.Port ||3000
require('./databaseConnection/db')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
// app.use(express.json())// YOU CAN ALSO USE THIS MIDDWEAR
app.use('/', userRouters ) 

app.listen(Port, () => {
    console.log(`YOUR SERVER IS WORKING AT PORT ${Port}`)
});

                