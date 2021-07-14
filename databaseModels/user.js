const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({

    first_name: {
        type: String
    },

    last_name: {
        type: String
    },
    contact: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}
)

const User = mongoose.model("UserData", UserSchema)
module.exports = User
