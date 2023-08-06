const sequelize = require('../config/connection');
const { User, Surveys, Response } = require('../models');
const userData = require('./userData.json');
const surveyData = require('./surveyData.json');
const responseData = require('./responseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create users and surveys
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const survey of surveyData) {
    const surveyInstance = await Surveys.create({
      ...survey,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    const surveyResponses = responseData.find((response) => response.survey_id === surveyInstance.id);
  if (surveyResponses) {
    for (const answer of surveyResponses.responses) { 
      for (const response of answer.answers) {
        await Response.create({
          user_id: answer.user_id, 
          survey_id: surveyInstance.id,
          user_response: {
            question: response.question,
            userAnswer: response.userAnswer
          }
        });
      }
    }
  }
}

  console.log('Database seeded successfully.');
  process.exit(0);
};

seedDatabase();