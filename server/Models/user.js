const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    group:{
        type:String,
        default:null
    },
    groupPass:{
        type:String,
        default:null
    },
    isLeader:{
        type:Boolean,
        default:false
    },
    isMentor:{
        type : Boolean,
        default: false
    },
    division:{
        type: String,
    }
},{timestamps:true})

const User = mongoose.model('user',userSchema);
module.exports = User;