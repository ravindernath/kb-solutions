const CommentDB = require('../models/commentModel');

async function addComment(req, res) {
  try {
    const commentData = {
      question_id: req.params.id,
      comment: req.body.comment,
      user: req.body.user
    };
    
    console.log('req.params.id:', req.params.id);
    console.log('req.body.comment:', req.body.comment);
    console.log('req.body.user:', req.body.user);

    const doc = await CommentDB.create(commentData);
    res.status(201).send({
      status: true,
      message: "Comment added Successfully"
    });
  } catch (err) {
    res.status(400).send({
      status: false,
      message: "Error while adding Comment"
    });
  }
}

module.exports = {
  addComment
};
