const Sequelize = require("sequelize");

// Database name, username, password, {host,}
const sequelize = new Sequelize("dbdemo", "postgres", "1234", {
  host: "127.0.0.1",
  dialect: "mysql" || "postgres"
});
console.log("database connected succesfully");

module.exports = sequelize;
