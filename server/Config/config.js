const Uri = "mongodb+srv://Ashhar:test123@formgroups.c4dq7hn.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose');

const ConnectDb = () => {
    mongoose.connect(Uri,()=>{
        console.log("Db Connected");
    });
}

module.exports = ConnectDb;