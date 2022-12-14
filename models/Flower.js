const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:mongoose.Types.Decimal128,required:true},
    description:{type:String, required:true},
    inventory:{type:Number, require:true},
    defaultPic:{type:String, required:true},
    defaultAlt:{type:String, required:false}
});
 
const Flower = mongoose.model('Flower', flowerSchema);

module.exports = Flower;