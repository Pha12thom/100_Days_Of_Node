import mongoose from "mongoose";

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true

    },
    email: {
        type: String
    },
    id: {
        type: Number,
        required: true,
        unique: true

    },


})

const User = mongoose.model("User", Users);

export default User;