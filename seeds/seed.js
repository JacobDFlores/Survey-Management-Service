const sequelize = require('../config/connection');
const { User, Surveys, Response } = require('../models');

const userData = require('./userData.json');
const surveyData = require('./surveyData.json');

const responseData = [];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (let i = 0; i < surveyData.length; i++) {
    const survey = surveyData[i];
    const surveyInstance = await Surveys.create({
      ...survey,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    const surveyResponses = [];
    for (const user of users) {
      const response = {
        user_id: user.id,
        answers: {},
      };
      for (const question of survey.questions) {
        const answer = `answer${Math.floor(Math.random() * 4) + 1}`;
        response.answers[question.question] = question[answer];
      }
      surveyResponses.push(response);
    }

    responseData.push({
      survey_id: surveyInstance.id,
      responses: surveyResponses,
    });
  }

  console.log('responseData:', responseData);

  process.exit(0);
};

seedDatabase();