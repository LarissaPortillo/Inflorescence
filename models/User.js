const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    username:{
        type:String, 
        required:[true, 'Please enter a unique username'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Please enter password']
    },
    role:{type:String, required:true},
    isLogged:{Boolean}
});

const User = mongoose.model('User', userSchema);

module.exports = User;