const userModel = require('../model/user_model');
const jwt = require('jsonwebtoken');

class UserService{
 static async registerUser(username,email,password){
    try{
        const creatuser = new userModel({username,email,password});
        return await creatuser.save();
    }catch(e){
        throw e;
    }
 }

 static async checkUser(email){
try {
    return await userModel.findOne({email});
} catch (error) {
    throw error;
}
 }

 static async generateToken(tokenData,secretkey,jwt_expires){
    return jwt.sign(tokenData,secretkey,{expiresIn:jwt_expires})

 }
}

module.exports = UserService;