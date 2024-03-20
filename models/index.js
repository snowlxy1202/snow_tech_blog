const User = require('./User');
const Dashboard = require('./Dashboard');

User.hasMany(Dashboard, {
    foriengKey: 'user_id',
    onDelete: 'CASCADE'
});

Dashboard.belongsTo(User, {
    foriengKey: 'user_id'
});

module.exports = { User, Dashboard };
