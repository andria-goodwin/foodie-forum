const User = require('./User');
const Food = require('./Food');

// Each user can have multiple posts
// If user is deleted, all of their food posts get deleted too
User.hasMany(Food, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Every food post belongs to a user
Food.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Food };
