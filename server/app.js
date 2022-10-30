const express = require('express');
const routes = require('./routes/Routes.js')
const ConnectDb = require('./Config/config')

const app = express();
const port = 3003;

ConnectDb()

app.listen(port,()=>{
    console.log("Listening at port 3003")
})
  
// send response in json
app.use(express.json());

// all routes
app.use(routes);