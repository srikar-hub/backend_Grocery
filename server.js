require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require("./config/database")
const userAuth = require("./routes/userAuth");

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
    await sequelize.authenticate(); // Ensure DB connection
    console.log("✅ Database connected successfully!");

    await sequelize.sync(); // Sync Database
    console.log("✅ Database synchronized!");

    console.log(`🚀 Server is running on port ${PORT}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
