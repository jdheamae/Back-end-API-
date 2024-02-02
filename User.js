const mongoose = require('mongoose')
DB_URL = 'mongodb://0.0.0.0/USER';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    phone: Number,
    title: String,
    isbn: Number
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;