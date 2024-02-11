const UserService = require('../service/user.services');

 exports.register = async(req,res,next)=>{
try{
 const {username,email,password} = req.body;
 const successResponse = await UserService.registerUser(username,email,password);
 res.json({status:true,success:"User Registered","body":successResponse.body});

}catch(err){

    res.status(404).json({status:false,error:err.message})
    console.log(err.message);
}


}


exports.login = async(req,res,next)=>{
    try{
     const {email,password} = req.body;
     const user =await UserService.checkUser(email);

     if(!user){
         return res.status(404).json({status:false,error:"User not found"});
     }
     const isMatch =await user.comparePassword(password);
     if(isMatch===false){
         return res.status(404).json({status:false,error:"Invalid Password"});
     }

     let tokenData= {_id:user._id,email:email};

     const token = await UserService.generateToken(tokenData,'secretkey','1h');

     res.status(200).json({status:true,success:"User Login",token:token});
    
    }catch(err){
    
        res.status(404).json({status:false,error:err.message})
        console.log(err.message);
    }
    
    
    }