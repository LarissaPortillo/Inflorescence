const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{type:String,required:[true,'Please enter your name']},
    username:{
        type:String, 
        required:[true, 'Please enter a unique username'],
        unique:true,
    },
    password:{
        type:String,
        required:[true, 'Please enter password'],
        minlength:[6, 'Minimum password length is 6 characters']
    },
    admin:{type:Boolean, required:true}
});

//fire a function before doc saved to db
//before saving then we fire a function
//this refers to user instance, we can only put next in function because doc empty before
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

//static method to login user
userSchema.statics.login = async function(username,password){
    const user = await this.findOne({username});
    if(user){//if it exists compare password
        const auth = await bcrypt.compare(password,user.password)
        if(auth){
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect username');
}

const User = mongoose.model('User', userSchema);

module.exports = User;