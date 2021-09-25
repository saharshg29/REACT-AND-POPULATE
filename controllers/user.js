const User = require('../models/users');
const Login = require('../models/logIn');

// ----------------------Post_USER_DATA-----------------------------------------------

class userData {

    async post_user(req, res) {

        var { first_name, last_name, gender, user_name } = req.body;

        let check = await Login.findOne({
            user_name: req.body.user_name
        })

        console.log(check._id)

        let user = new User({
            first_name,
            last_name,
            gender,
            user_name,
            login: check._id
        });


        try {
            const saved = await user.save()
            res.send("saved successfully")
            console.log(saved)
        }
        catch (error) {
            res.status(400)
            console.error(error);
        }


    }

    //---------------------------------- GET USER-DATA --------------------------------

    async get_user(req, res) {

        const loginData = await Login.find();
        const userData = await User
            .find()
            .populate('login', 'email', "")
        // const wanted =userData.findOne({ name: Bob }).populate("Bob", "job email")

        userData.toString
        res.status(200).json({data:userData})
        console.log(userData[0])
    }

}

module.exports = userData;