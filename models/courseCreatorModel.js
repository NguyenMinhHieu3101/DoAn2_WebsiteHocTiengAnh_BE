const mongoose = require("mongoose")
const courseSchema = mongoose.Schema({
    name: {
        type:String,
        require: [true, "Please add the course name"],
    },
    des:{
        type: String,
        required: [true, "Please add the description"]
    },
    image: {
        type:String,
        require: [true, "Please add the image"],
    },
    amount: {
        type: Number,
        require: [true,"Please add the number of candidates"]
    }, 
    creatorname: {
        type:String,
        require: [true, "Please add the creator name"],
    },
   
},{
    timestamps: true,
});
module.exports = mongoose.model("Course", courseSchema);