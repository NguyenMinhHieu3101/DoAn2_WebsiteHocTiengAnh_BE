const mongoose = require("mongoose");

// id, hình người, tên người, thời gian, nội dung, hình bài
//create schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        trim: true,
    },
    description:{
        type: String,
        required: [true, "Please add a description"],
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        //ref: "Category",
       
    },
    numViews:[
        {
            type: Number,
   
        }
    ],
    likes:[
        {
            type: Number,
            
        }
    ],
    dislikes:[
        {
            type: Number,
       
        }
    ],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        //ref: "User",
       
    },
    photo:{
        type: String,
    
    }
},
{
    timestamps: true,
});

//compile the user model
const Post = mongoose.model("Post",postSchema);

module.exports = Post;