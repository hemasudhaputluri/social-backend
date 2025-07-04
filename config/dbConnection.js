const {sequelize} = require('sequelize');
const config = require('./index.js');

console.log("======DB info======");

const sequelizer = new Sequlize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host : config.DB_HOST,
  dialect : config.DB_DIALECT,
  port : config.DB_PORT,
  logging : false
});

try {
  sequelizer.authenticate();
  console.log("DB looking fine af");
}catch(error){
  console.log("Damn bro ur db connection is shit");
}
