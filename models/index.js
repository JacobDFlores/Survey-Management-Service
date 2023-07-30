const User = require('./User');
const Surveys = require('./Surveys');
const Response = require('./Response');

User.hasMany(Surveys, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Surveys.belongsTo(User, {
  foreignKey: 'user_id'
});

Surveys.hasMany(Response, {
  foreignKey: 'survey_id',
  onDelete: 'CASCADE',
});

Response.belongsTo(Surveys, {
  foreignKey: 'survey_id',
});

module.exports = { User, Surveys, Response };
