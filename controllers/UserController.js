const db = require("../models");
const jwt = require("../configs/jwt");
const { User } = db;

module.exports = {
    signup: (req, res) => {
        const { email, firstName, lastName, username } = req.body
        try {
            if(!email || !firstName || !lastName || !username) {
                return res.status(400).send("Please fill out all fields");
            }
            User.findOne({$or: [{email}, {username}]}).then(user => {
                if(user === null) {
                    User.create(req.body)
                    .then(createdUser => {
                        db.Library
                        .create({username: username})
                    })
                    return res.status(200).json('User created');
                };

                if(email === user.email) {
                    return res.status(400).send("Email already exists. Please use a different email.");
                };

                if (username === user.username) {
                    return res.status(400).send("Username already exists. Please use a different username.");
                };

            })

        } catch (err) {
            return res.status(500).json("Server error, cannot signup");
        }
    },
    login: (req, res) => {
        try {
            console.log(req.user)
            const id = req.user._id
            console.log(id)
            req.session.save(()=> {
                req.session.username = req.user.username
                res.status(200).json({ token: jwt.sign({id}), token_type: "Bearer" });
            })
            
        } catch (err) {
            return res.status(500).send("Server error, cannot login");
        }
    },
    logout: (req, res) => {
        try {
            if(req.user) {
                req.session.destroy(err => {
                    if (err) throw err;
                    res.send({ message: "User logged out" });
                });
                // req.logout();
            } else {
                res.send({ message: "no user to logout" });
            };
        } catch (err) {
            return res.status(500).send(err);
        }
        req.logout();
    },
    getUser: async (req, res) => {
        try {
            const { id } = req.params
            const data = await User.findById(id)
            res.status(200).json(data)
        } catch (err) {
            return res.status(500).send(err);
        }
    }
};