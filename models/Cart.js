const mongoose = require('mongoose');

let itemSchema = new mongoose.Schema({
    itemId:{type:mongoose.Schema.Types.ObjectId, ref:'Flower'},
    quantity:{type:Number, required:true, min:[1,'Quantity can not be less than 1']},
    price:{type: mongoose.Types.Decimal128,required:true},
    total:{type:mongoose.Types.Decimal128,required: true, default:0}
});

const cartSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    items:[itemSchema],
    subTotal:{type:Number, default:0}
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;