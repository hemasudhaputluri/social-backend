const { Sequelize } = require("sequelize");
const config = require("./index.js");

const {
  dbName,
  user,
  password,
  host,
  port,
  dialect
} = config.postgres;

const sequelize = new Sequelize(dbName, user, password, {
  host,
  dialect,
  port,
  logging: false,
});


try {
  sequelize.authenticate();
  console.log("DB connection looking fine af");
} catch (error) {
  console.error("DB connection ain't shit bro: ", error);
}
;

sequelize.sync({ force: false }) // Set `force: true` to drop and recreate tables
    .then(() => {
        console.log("All models were synchronized successfully.");
    })
    .catch((error) => {
        console.error("Error synchronizing models:", error);
    });

module.exports = sequelize;

