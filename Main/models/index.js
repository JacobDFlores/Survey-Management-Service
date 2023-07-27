const User = require('./User');
const Surveys = require('./Surveys');

User.hasMany(Surveys, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Surveys.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Surveys };
