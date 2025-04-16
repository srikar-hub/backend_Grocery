const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = sequelize.define("Customer", {
name: {
type: DataTypes.STRING,
allowNull: false,
},
email: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
},
password: {
    type: DataTypes.STRING,
},
});
sequelize.sync({ force: true }) // Creates table if not exists
.then(() => console.log("User table created"))
.catch((err) => console.error(" Error creating table:", err));
module.exports = User;