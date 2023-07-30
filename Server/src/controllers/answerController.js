const AnswerDB = require("../models/answerModel")

async function createAnswer(req, res) {
  try {
    const answerData = new AnswerDB({
        question_id: req.body.question_id,
        answer: req.body.answer,
        user: req.body.user 
     })

    const doc = await answerData.save();
    res.status(201).send({
      status: true,
      data: doc
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: "Error while adding Answer"
    });
  }
}

module.exports = {
    createAnswer
};