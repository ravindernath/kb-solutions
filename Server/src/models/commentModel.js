const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Questions"
        },
        comment: String,
        created_at: {
            type: Date,
            default: Date.now,
        },
        user: Object ,
    }
);

const comment = mongoose.model("Comments", commentSchema)

module.exports = comment;