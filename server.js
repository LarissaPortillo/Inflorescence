const express = require('express');
const mongoose=require('mongoose');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 3003;

const methodOverride = require('method-override');


//DB connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open',()=>{
    console.log('Connected to mongo');
});

//middleware
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

//set views
app.set('view engine','jsx');

//initialize engine
app.engine('jsx',require('express-react-views').createEngine());

//schema
const Flower = require('./models/Flower')

//routes



app.listen(port,()=>{
    console.log('Listen to port ',port);
});
