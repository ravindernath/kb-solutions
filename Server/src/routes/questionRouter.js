const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const { default: mongoose } = require('mongoose');
const QuestionDB = require('../models/questionModel');

router.post('/', questionController.createQuestion);


router.get("/", async (req, res) => {
    QuestionDB.aggregate([
        {
            $lookup: {
                from: "comments",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$question_id", "$$question_id"],
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 1,
                            // user_id: 1,
                            Comment: 1,
                            created_at: 1,
                            // question_id: 1,
                        },
                    },
                ],
                as: "comments",
            },
        },
        {
            $lookup: {
                from: "answers",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$question_id", "$$question_id"],
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 1,
                            // user_id: 1,
                            // answer: 1,
                            // created_at: 1,
                            // question_id: 1,
                            // created_at: 1,
                        },
                    },
                ],
                as: "answerDetails",
            },
        },
        {
            $unwind: {
                path: "$answerDetails",
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $project: {
                _v: 0,
                // _id: "$_id",
                // answerDetails: { $first: "$answerDetails"},
            },
        },
    ])
        .exec()
        .then((questionDetails) => {
            res.status(200).send(questionDetails);
        })
        .catch((e) => {
            console.log("Error: ", e);
            res.status(400).send(e);
        });
});

router.get("/:id", async (req, res) => {
    try {
      // const question = await QuestionDB.findOne({ _id: req.params.id });
      // res.status(200).send(question);
      // Use the new keyword when creating ObjectId
        const objectId = new mongoose.Types.ObjectId(req.params.id);

      QuestionDB.aggregate([
        {
          $match: { _id: objectId },
        },
        {
          $lookup: {
            from: "answers",
            let: { question_id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$question_id", "$$question_id"],
                  },
                },
              },
              {
                $project: {
                  _id: 1,
                  user: 1,
                  answer: 1,
                  // created_at: 1,
                  question_id: 1,
                  created_at: 1,
                },
              },
            ],
            as: "answerDetails",
          },
        },
        {
          $lookup: {
            from: "comments",
            let: { question_id: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$question_id", "$$question_id"],
                  },
                },
              },
              {
                $project: {
                  _id: 1,
                  question_id: 1,
                  user: 1,
                  comment: 1,
                  // created_at: 1,
                  // question_id: 1,
                  created_at: 1,
                },
              },
            ],
            as: "comments",
          },
        },
        // {
        //   $unwind: {
        //     path: "$answerDetails",
        //     preserveNullAndEmptyArrays: true,
        //   },
        // },
        {
          $project: {
            __v: 0,
            // _id: "$_id",
            // answerDetails: { $first: "$answerDetails" },
          },
        },
      ])
        .exec()
        .then((questionDetails) => {
          res.status(200).send(questionDetails);
        })
        .catch((e) => {
          console.log("Error: ", e);
          res.status(400).send(error);
        });
    } catch (err) {
        // console.log(err)
      res.status(400).send({
        message: "Question not found",
      });
    }
  });

module.exports = router;
