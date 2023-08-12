const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    user:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type: String,
        required:true
    }
});

const Register = new mongoose.model("Customer",customerSchema);
module.exports = Register;