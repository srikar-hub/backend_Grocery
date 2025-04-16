const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.PORT || 6969
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Grocery App",
      version: "1.0.0",
      description: "API documentation for Recipe Finder App",
    },
    servers: [{ url: `http://localhost:${port} `}],
  },
  apis: ["./routes/*.js"], // Specify route files for API documentation
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger Docs available at http://localhost:6969/api-docs");
};

module.exports = swaggerDocs;
