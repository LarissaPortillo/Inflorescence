const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number,required:true},
    description:{type:String, required:true},
    inventory:{type:Number, require:true},
    defaultPic:{type:String, required:true}
});
 
const Flower = mongoose.model('Flower', flowerSchema);

module.exports = Flower;