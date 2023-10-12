const mongoose = require("mongoose")
const studyHistorySchema = mongoose.Schema({
    course: {
        type: String,
        required: true,
    },
 
    user: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});
module.exports = mongoose.model("StudyHistory", studyHistorySchema);