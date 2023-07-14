const express = require('express');
const { questionRouter } = require("../controllers/questionControllers");

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to KB api')
})


router.use('/question', questionRouter)



module.exports = router; 