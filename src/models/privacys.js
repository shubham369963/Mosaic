const mongoose = require("mongoose");

const privacySchema = new mongoose.Schema({


    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    option:{
        type: String,
        required:true
    }
});

const PrivacyNew = new mongoose.model("Privacy",privacySchema);
module.exports = PrivacyNew;