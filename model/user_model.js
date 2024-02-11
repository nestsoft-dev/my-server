const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const {Schema }= mongoose;


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    }

});

userSchema.pre('save',async function(){
try{
var user = this;
const salt = await (bcrypt.genSalt(10));
const hashpassword = await bcrypt.hash(user.password,salt)

user.password = hashpassword;
}catch(e){
throw e;
}
})

userSchema.methods.comparePassword= async function(userPassword){
    try {
        const isMatch = await bcrypt.compare(userPassword,this.password)
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const usermodel = db.model('User',userSchema);

module.exports = usermodel;