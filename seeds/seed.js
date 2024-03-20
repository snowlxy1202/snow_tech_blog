const sequelize = require('../config/connection');
const { Dashboard, User } = require('../models');

const dashboardData = require('./dashboardData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

  const lists = await Dashboard.bulkCreate(dashboardData);

  const users = await User.bulkCreate(userData);

  process.exit(0);
};

seedDatabase();