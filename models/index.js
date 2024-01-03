const User = require('./user');
const Food = require('./Food');

User.hasMany(Food, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Food };
