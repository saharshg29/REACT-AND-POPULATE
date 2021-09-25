const mongoose = require("mongoose");
const { Schema } = mongoose;

const login = new Schema({
    user_name: {
        type: String,
        required: [true, 'username is require']
    },
    email: {
        type: String,
        required: [true, 'Email is require']
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, 'password is required']
    }

},   { collection: "logoInData" ,timestamps:true} )

const logoInData = mongoose.model("logoInData", login);
module.exports = logoInData;
