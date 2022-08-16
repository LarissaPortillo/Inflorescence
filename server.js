const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
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
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());



//set views
app.set('view engine','jsx');

//initialize engine
app.engine('jsx',require('express-react-views').createEngine());

//schema
const Flower = require('./models/Flower');
const Cart = require('./models/Cart');
const User = require('./models/User')


const requireAuth = (req,res,next)=>{
    const tkn = req.cookies.jwt;
    
    //check json web token exists and is verified
    if(tkn){
        jwt.verify(tkn, 'my little secret', (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                console.log(decodedToken);
                next();
            }
        });
    }
    else{
        res.redirect('/login');
    }
}

//check current user
const checkUser = (req,res,next)=>{
    const tkn = req.cookies.jwt;

    if(tkn){
        jwt.verify(tkn, 'my little secret', async (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user=null;
                next();
            }
            else{
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    }
    else{
        res.locals.user = null;
        next();
    }
}

//handle errors
const handleErrors = (err) =>{
    console.log(err.message,err.code);
    let errors = {name: '', username:'', password:''};
    
    //incorrect username
    if(err.message === 'incorrect username'){
        errors.username = 'That username is not registered';
    }

    //incorrect password
    if(err.message === 'incorrect password'){
        errors.username = 'That password is incorrect';
    }

    //duplicate error code
    if(err.code===11000){
        errors.username='That username is already in use.';
        return errors;
    }

    //validation errors
    if(err.message.includes('User validation failed')){
       Object.values(err.errors).forEach(({properties})=>{
        errors[properties.path]=properties.message;
       })
    }
    return errors;
}

const maxAge = 3*24*60*60; //(3 days*24hrs*60minutes*60secs) max age is 3 days
const createToken = (id) =>{
    return jwt.sign({id},'my little secret',{
        expiresIn: maxAge
    });
}



//routes
//'*' apply to all routes and get request
app.get('*', checkUser);

//AUTH routes//
//sign up page
app.get('/signup',(req,res)=>{
    res.render('SignUp');
});


//log in page
app.get('/login',(req,res)=>{
    res.render('Login');
})

//create a new user in db
app.post('/signup', async(req,res)=>{
    const{name,username,password,admin} = req.body;
    try{
        const user = await User.create({name,username,password,admin:false});
        const token = createToken(user.id);
        res.cookie('jwt',token,{httpOnly: true, maxAge: maxAge*1000});
        res.status(201).json({user:user.id});
    }
    catch(err){
        const errors = handleErrors(err); 
        res.status(400).json({errors});
    }
})

//authenticate a current user
app.post('/login', async(req,res)=>{
    const{username,password} = req.body;
  
    try{
        const user = await User.login(username,password);
        const token = createToken(user._id);
        res.cookie('jwt',token,{httpOnly: true, maxAge: maxAge*1000});
        res.status(200).json({user:user._id});
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
});

//log a user out
app.get('/logout',(req,res)=>{
    //delete jwt cookie, we can't delete but we can replace it with a blank cookie
    res.cookie('jwt','', {maxAge:1});
    res.redirect('/');
});

//----------//

//home page
app.get('/',(req,res)=>{
    res.render('Home');
});

//index
app.get('/flor', requireAuth,(req,res)=>{
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

//cart 

const itemById = async (id)=>{
    const item = await Flower.findById(id);
    return item;
}

const crt = async()=>{
    const carts=await Cart.find().populate({
        path:'items.itemId',
        select:'name price total'
    });
    return carts[0];
} 

const addItem = async (payload)=>{
    const newItem = await Cart.create(payload);
    return newItem;
}

//get cart
app.get('/cart', async(req,res)=>{   
    try{
        let cart = await crt();
        if(!cart){
            return res.status(400).json({
                type:'invalid',
                msg:'cart not found',
            });
        }
        res.status(200).json({
            status:true,
            data:cart
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            type:'invalid',
            msg:'something went wrong in get cart',
            err:err
        });
    }
});

//add item to cart
app.post('/cart', async(req,res)=>{
    const{itemId}=req.body;
    const quantity=Number.parseInt(req.body.quantity);
    try{
        let cart = await crt();
        let itemDetails = await itemById(itemId);
        if(!itemDetails){
            return res.status(500).json({
                type:'Not found',
                msg:'Invalid request'
            });
        }
        //if cart exists 
        if(cart){
            //check if index exists
            const indexFound=cart.items.findIndex(item=> item.itemId.id==itemId);
            //remove item from cart if quantity is 0
            if(indexFound !== -1 && quantity <=0){
                cart.items.splice(indexFound,1);
                if(cart.items.length ==0){
                    cart.subtotal=0;
                }
                else{
                    cart.subTotal= cart.items.map(item=>item.total).reduce((acc,next)=> acc+next);
                }
            }
            //check product exists when updating quantity
            else if (indexFound !==-1){
                //if exist make sure that quantity is within quatity limit
                const sub=parseInt(cart.items[indexFound].quantity);
                if(quantity<= (itemDetails.inventory-sub)){
                    cart.items[indexFound].quantity=cart.items[indexFound].quantity+quantity;
                    cart.items[indexFound].total = cart.items[indexFound].quantity * itemDetails.price;
                    cart.items[indexFound].price = itemDetails.price;
                    cart.subTotal = cart.items.map(item => item.total).reduce((acc,next)=>acc+next);
                }
                else{
                    return res.status(400).json({
                        type:'invalid',
                        msg:'cannot existing prod'
                    })
                }
            }
            //if quantity is greater than 0 then add items to array
            else if(quantity>0 ){
                const sub=cart.items[indexFound].quantity;
                console.log(sub)
                if(quantity<= (itemDetails.inventory-sub)){
                    cart.items.push({
                    itemId:itemId,
                    quantity:quantity,
                    price:itemDetails.price,
                    total:parseInt(itemDetails.price * quantity)
                });
                cart.subTotal=cart.items.map(item=>item.total).reduce((acc,next)=>acc+next);
                }
                else{
                    return res.status(400).json({
                        type:'invalid',
                        msg:'cannot add to existing item'
                    })
                }
            }
            //if quantity price is 0 throw error
            else{
                return res.status(400).json({
                    type:'invalid',
                    msg:'invalid request'
                })
            }
            let data = await cart.save();
            res.status(200).json({
                type:'success',
                msgs:'process successful',
                data:data
            });
        }
        //no cart? create cart and add items
        else{
            if(quantity<=itemDetails.inventory ){
                 const cartData={
                items:[{
                    itemId:itemId,
                    quantity:quantity,
                    total:parseInt(itemDetails.price*quantity),
                    price:itemDetails.price
                }],
                subTotal:parseInt(itemDetails.price*quantity)
                } 
                cart =await addItem(cartData);
                res.json(cart);
            }
            else{
                return res.status(400).json({
                    type:'invalid',
                    msg:'cannot add to new cart'
                })
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            type:'Invalid',
            msg:'something went wrong adding to cart',
            err:err
        });
    }
});

//empty cart
app.delete('/cart/empty-cart', async(req,res)=>{
    try{
        let cart = await crt();
        cart.items=[];
        cart.subTotal=0;
        let data = await cart.save();
        res.status(200).json({
            type:'success',
            msg:'cart has been emptied',
            data:data
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            type:'invalid',
            msg:'something went wrong with delete cart',
            err:err
        });
    }
});

// app.post('/cart',(req,res)=>{
//     jwt.verify(req.cookies.jwt, 'my little secret', async (err, decodedToken)=>{
//         console.log('user',decodedToken);
//         let user = await User.findById(decodedToken.id);
//         Cart.create(req.body,(err,createdItem)=>{
//             req.body.user=user;
//             res.redirect('/cart');
//         });
//     }); 
    
// });

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
