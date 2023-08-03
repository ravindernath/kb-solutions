const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema(
    {
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Questions"
        },
        answer: { type: String },
        created_at: {
            type: Date,
            default: Date.now,
        },
        user: Object,
        comment_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comments",
        },
    }
);

const answer = mongoose.model("Answers", answerSchema)

module.exports = answer;