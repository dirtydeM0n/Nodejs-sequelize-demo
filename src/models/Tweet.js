const Sequelize = require("sequelize");
const sequelize = require("../database/dbcon");

// the code below represents a table
// All the attributes within represents columns contained in this table
module.exports = sequelize.define("Tweets", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: Sequelize.STRING(300)
});
