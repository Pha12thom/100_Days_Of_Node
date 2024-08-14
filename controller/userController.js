const User = require('../models/usermodel.js');


const create = async(req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ message: "user already exists" });
        }
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    } catch (error) {
        res.status(500).json({ error: "internal server error" });

    }
}





const fetch = async(req, res) => {
    try {
        res.json("helllo mongo db");

    } catch (error) {
        res.status(500).json({ error: "internal server error" });

    }
}


module.exports = create;
module.exports = fetch;