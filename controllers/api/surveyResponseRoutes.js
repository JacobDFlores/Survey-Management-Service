const router = require('express').Router();
const { Response } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:survey_id', async (req, res) => {
    console.log(req.body)
    try {
        const response = await Response.create({
            survey_id: req.params.survey_id,
            question: req.body.question,
            answer: req.body.answer,
        });
        res.status(201).json(response);
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;