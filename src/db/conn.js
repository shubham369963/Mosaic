const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_KEY,{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(e);
});