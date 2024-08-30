const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

        unique: true
    },
    phone: {
        type: String,

    },
    profileimage: {
        type: String,
    },
    create: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;