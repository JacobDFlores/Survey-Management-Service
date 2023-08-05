const router = require('express').Router();
const { Surveys, User, Response } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const surveyData = await Surveys.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const surveys = surveyData.map((survey) => survey.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {  
      surveys,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/survey/:id', withAuth, async (req, res) => {
  try {
    const surveyData = await Surveys.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // req.session.save(() => {
    //   req.session.survey_id = surveyData.id;
    // });

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Surveys }],
    });

    const survey = surveyData.get({ plain: true });
    const user = userData.get({ plain: true });

    res.render('survey', {
      ...survey,
      ...user,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Surveys }],
    });

    const user = userData.get({ plain: true });

    res.render('createsurvey', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Surveys }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// View survey data for a specific survey on the profile page
// router.get('/survey/:survey_id', withAuth, async (req, res) => {
//   try {
//     const surveyData = await Surveys.findByPk(req.params.survey_id, {
//       include: [
//         {
//           model: Response,
//           attributes: ['question', 'answer'],
//         },
//       ],
//     });

//     if (!surveyData) {
//       res.status(404).json({ message: 'Survey not found' });
//       return;
//     }

//     const { name, description, responses } = surveyData.get({ plain: true });

//     // Convert the responses into a format suitable for Chart.js
//     const chartData = {
//       labels: responses.map((response) => response.question),
//       datasets: [
//         {
//           label: 'Survey Responses',
//           data: responses.map((response) => response.answer),
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };

//     res.render('profile', {
//       name,
//       description,
//       chartData,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
