const router = require('express').Router();
const { Surveys } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSurvey = await Surveys.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSurvey);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const surveyData = await Surveys.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!surveyData) {
      res.status(404).json({ message: 'No survey found with this id!' });
      return;
    }

    res.status(200).json(surveyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;