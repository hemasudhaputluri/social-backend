// region imports
const express = require('express');
const sequelize = require('./config/index.js');
const { app: appConfig, postgres } = require('./config/index.js');
const dbConnection = require('./config/dbConnection.js'); // it automatically connects to the database and runs the authentication check
const allRoutes = require('./src/routes/allRoutes.js'); // Importing all routes

const app = express();
app.use(express.json());
app.use('/api', allRoutes);

app.listen(appConfig.port, () => {
  console.log(`Server is running in ${appConfig.env} mode on port ${appConfig.port}`);
});