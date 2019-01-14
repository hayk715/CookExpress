const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema= new Schema({
    googleId:{type:String,default:null},
    twitterId:{type:String,default:null},
    username:String,
    password:{type:String,default:null},
    email:String
    
});

const User=mongoose.model("user",userSchema);

module.exports=User;

