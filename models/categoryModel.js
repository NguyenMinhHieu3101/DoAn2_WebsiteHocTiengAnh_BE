const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    description:{
        type: String,
  
    },
},{
    timestamps: true,
})
module.exports = mongoose.model("Category", CategorySchema)