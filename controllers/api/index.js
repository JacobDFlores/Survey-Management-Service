const router = require('express').Router();
const userRoutes = require('./userRoutes');
const surveyRoutes = require('./surveyRoutes');
const surveyResponseRoutes = require('./surveyResponseRoutes');

router.use('/users', userRoutes);
router.use('/surveys', surveyRoutes);
router.use('/responses', surveyResponseRoutes);

module.exports = router;
