var express = require("express");

var logIN=require('../controllers/login')
var logInData=new logIN()

var User = require('../controllers/user')
var userData = new User();

var data_Route=express.Router()


// --------------------------Log IN--------------------------------------------
data_Route.post('/login',logInData.post_login)

// --------------------------ENTER DATA--------------------------------------------
data_Route.post('/user',userData.post_user)


data_Route.get('/userall',userData.get_user)


module.exports = data_Route;