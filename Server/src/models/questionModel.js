const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true},
        tags: [],
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

const question = mongoose.model("Questions", questionSchema)

module.exports = question;