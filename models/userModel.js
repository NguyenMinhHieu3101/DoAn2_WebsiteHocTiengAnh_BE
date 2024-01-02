const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: {
        type:String,
        require: [true, "Please add the user name"],
    },
    email:{
        type: String,
        required:[true, "Please add the user email address"],
        unique:[true, "Email address already taken"],
    },
    password:{
        type: String,
        required: [true, "Please add the user password"]
    },
    image:{
        type: String,
        required: false
    },
    name: {
        type:String,
        require: [true, "Please add the name"],
    },
    dateofbirth: {
        type:String,
        require: [true, "Please add the date of birth"],
    },
    // postCount:{
    //     type: Number,
    //     default: 0
    // },
    // isBlocked:{
    //     type: Boolean,
    //     default: false
    // },
    // isAdmin:{
    //     type: Boolean,
    //     default: false
    // },
    role:{
        type: String,
        enum: ["admin","user", "manager", "create"],
    },
    // viewedBy: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // }],
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // }],
    // following: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // }],
    // active:{
    //     type: Boolean,
    //     default: true,
    // },
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    // }]
},{
    timestamps: true,
});
module.exports = mongoose.model("User", userSchema);
