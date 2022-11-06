const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("absensi", "root", "", {
  dialect: "mysql",
  host: "localhost",
}); //namaDb, userName, password

module.exports = sequelize;