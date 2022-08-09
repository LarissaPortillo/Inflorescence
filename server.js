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
//home page
app.get('/',(req,res)=>{
    res.render('Home');
})

//index
app.get('/flor',(req,res)=>{
    Flower.find({},(err,allFlowers)=>{
        res.render('Index', {flower:allFlowers});
    });
});

//new
app.get('/flor/new',(req,res)=>{
    res.render('New');
});

//post
app.post('/flor',(req,res)=>{
    Flower.create(req.body,(err,createdFlower)=>{
        res.redirect('/flor');
    });
});

app.listen(port,()=>{
    console.log('Listen to port ',port);
});
