const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentsController');

router.post('/:id', commentController.addComment);

module.exports = router;
