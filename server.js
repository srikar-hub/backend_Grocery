require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models"); // Import database models
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require("./models/index");
const userAuth = require("./routes/userAuth");
const user = require("./models/user");
const { setup } = require("swagger-ui-express");
const setupSwagger = require("./swagger");
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Default Route
app.get("/", (req, res) => {
  res.send("Recipe Finder API is running!");
});
app.use("/api/auth", userAuth);
setupSwagger(app);
// Start Server
app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
  console.log(`Server running on port ${PORT}`);
});
