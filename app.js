require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
var bodyParser = require('body-parser')
const router = require('./routes/route')
const connectDb = require('./config/connectDb');



var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(morgan('tiny'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
connectDb()
// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT || 5000;

app.use('/api/tasks/v1',router)

app.listen(port,()=>{
    console.log(`app listening on ${port}...`)
})