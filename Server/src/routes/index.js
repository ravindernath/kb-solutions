const express = require('express');

const router = express.Router();
const questionRouter = require('./questionRouter');
const answerRouter = require('./answerRouter');
const commentsRouter = require('./commentsRouter');

router.get('/', (req, res) => {
    res.send('Welcome to KB api')
})

router.use('/question', questionRouter);
router.use('/answer', answerRouter);
router.use('/comment', commentsRouter);

module.exports = router;
