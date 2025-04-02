const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json")[
  process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
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
