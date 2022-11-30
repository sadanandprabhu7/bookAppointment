const Sequelize = require("sequelize");

const sequelize = new Sequelize("appointment", "root", "sada123@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
