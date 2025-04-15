const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.MYSQL_URL,
  {
    dialect: "mysql",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require("./user")(sequelize, DataTypes);

// Sync models with database
db.sequelize.sync({ alter: true });

module.exports = db;
