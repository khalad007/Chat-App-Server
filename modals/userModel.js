const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
},
    {
        timeStamp: true
    }
)

const User = mongoose.Model("User", userModel);
module.exports = User;