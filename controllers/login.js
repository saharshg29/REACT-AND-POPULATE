var logIN = require("../models/logIn");
const bcrypt = require('bcrypt');

class userData {


    // ----------------------Post LOGIN------------------------------------------
    async post_login(req, res) {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        var login = new logIN({
            user_name: req.body.user_name,
            email: req.body.email,
            password: hashedPassword
        });

        console.log("post_Data===================>", login)

        login.save()
            .then(data => res.json({ user: data }))
            .catch(err => res.status(400).json({ error: err.message }))

    }


}

module.exports = userData;