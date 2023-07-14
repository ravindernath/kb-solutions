const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema(
    {
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Questions"
        },
        answer: { type: String, required: true },
        body: { type: String, required: true, unique: true },
        tags: [],
        created_at: {
            type: Date,
            default: Date.now(),
        },
        user: { type: Object },
        comment_id: {
            type: mongoose.Schema.Types.ObjectId,
            default: "Comments",
        },
    },
    {
        timestamps: true,
    }
);

const answer = mongoose.model("Answer", answerSchema)

module.exports = answer;