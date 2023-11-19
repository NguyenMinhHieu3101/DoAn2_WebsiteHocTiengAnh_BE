const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    post:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        
    },
    content:{
        type: String,
        required: true,
    }
},{
    timestamps: true,
})
module.exports = mongoose.model("Comment", commentSchema)