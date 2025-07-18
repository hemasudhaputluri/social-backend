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

module.exports = sequelize;

