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
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

//set views
app.set('view engine','jsx');

//initialize engine
app.engine('jsx',require('express-react-views').createEngine());

//schema
const Flower = require('./models/Flower');
const Cart = require('./models/Cart');

//routes
//home page
app.get('/',(req,res)=>{
    res.render('Home');
});

//login
app.get('/login',(req,res)=>{
    res.render('Login');
});

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

//create login
app.get('/create-login',(req,res)=>{
    res.render('CreateLogin');
});

//post
app.post('/flor',(req,res)=>{
    Flower.create(req.body,(err,createdFlower)=>{
        res.redirect('/flor');
    });
});

//show
app.get('/flor/:id',(req,res)=>{
    Flower.findById(req.params.id, (err,foundFlower)=>{
        res.render('Show',{flower:foundFlower});
    });
});

//edit
app.get('/flor/:id/edit',(req,res)=>{
    Flower.findById(req.params.id, (err,foundFlower)=>{
        if(!err){
            res.render('Edit',{flower:foundFlower});
        }
        else{
            res.send({msg:err.msg});
        }
    });
});

//update
app.put('/flor/:id',(req,res)=>{
    Flower.findByIdAndUpdate(req.params.id, req.body,{new : true},(err,flower)=>{
        res.redirect(`/flor/${req.params.id}`);
    });
});

//delete 
app.delete('/flor/:id',(req,res)=>{
    Flower.findByIdAndRemove(req.params.id,(err,foundFlower)=>{
        res.redirect('/flor');
    });
});

app.listen(port,()=>{
    console.log('Listen to port ',port);
});
