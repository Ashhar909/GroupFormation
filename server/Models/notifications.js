const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    
},{timestamps:true})

const Notification = mongoose.model('notification',notificationSchema);
module.exports = Notification;