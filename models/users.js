const mongoose = require("mongoose");
const { Schema } = mongoose;
const Login = require('./logIn');

const UserData = new Schema({
    first_name: {
        type: String,
        required: [true, 'First Name is require']
    },
    last_name: {
        type: String,
        required: [true, 'Last Name is require']
    },
    login: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Login
    },
    gender: {
        type: String,
        required: [true, 'Gender is require']
    },
    user_name: {
        type: String,
        required: [true, 'User Name is require']
    }


}, { collection: "UserData" ,timestamps:true})

const userData = mongoose.model("UserData", UserData);
module.exports = userData;