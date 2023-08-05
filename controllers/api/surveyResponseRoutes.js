const router = require('express').Router();
const { Response } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:survey_id', withAuth, async (req, res) => {
    console.log(req.body)
    try {
        const newResponse = await Response.create({
            ...req.body,
            survey_id: req.params.survey_id,
            user_id: req.session.user_id,
          });
        res.status(201).json(newResponse);
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;