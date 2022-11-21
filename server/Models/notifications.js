const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    RequestedGrp:{
        type: String
    },
    mentor:{
        type:String
    },
    accept:{
        type: Boolean,
        default :false
    }
},{timestamps:true})

const Notification = mongoose.model('notification',notificationSchema);
module.exports = Notification;