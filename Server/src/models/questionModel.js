const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
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

const question = mongoose.model("Questions", questionSchema)

module.exports = question;