const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
    {
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Questions"
        },
        comment: { type: String, required: true },
        created_at: {
            type: Date,
            default: Date.now(),
        },
        user: { type: Object },
    },
    {
        timestamps: true,
    }
);

const comment = mongoose.model("Comments", commentSchema)

module.exports = comment;