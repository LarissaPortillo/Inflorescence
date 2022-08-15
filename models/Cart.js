const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userid:{type:String,required:false},
    products:{type:Array, required:false},
    total:{type:mongoose.Types.Decimal128,required: false}
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;