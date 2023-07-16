const QuestionDB = require('../models/questionModel');

async function createQuestion(req, res) {
  try {
    const questionData = new QuestionDB({
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tag,
      user: req.body.user
    });

    const doc = await questionData.save();
    res.status(201).send({
      status: true,
      data: doc
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: "Error adding question"
    });
  }
}

module.exports = {
  createQuestion
};
