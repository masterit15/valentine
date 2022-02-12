const sequelize = require("sequelize");
require('dotenv').config()

const db = new sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  dialect: "mysql",
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  define: {
    timestamps: false
  },
  logging: false
});
db.sync().then(result=>{
  // console.log(result);
})
.catch(err=> {
  console.log(err)
});
module.exports = db;