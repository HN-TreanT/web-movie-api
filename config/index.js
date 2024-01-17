require("dotenv").config();
const config = {
  api: {
    port: 8000,
  },
  database: {
    username:  "root",
    password: "hnam23012002",
    database: "movie",
    port: 3306, 
    host: "database", 

    // username:  process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.DB_DATABASE,
    // port: process.env.DB_PORT, 
    // host: process.env.DB_HOST,

    // username: process.env.MYSQL_ADDON_USER,
    // password: process.env.MYSQL_ADDON_PASSWORD,
    // database: process.env.MYSQL_ADDON_DB,
    // port: 3306, // thay đổi port kết nối tới MySQL từ 8080 thành 3307
    // host: process.env.MYSQL_ADDON_HOST,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 10000,
    },
  },
  secretKeyJWT: "asdsadsanmdnNHandas@_1212$#*&^",
  secretKeyRFT: "hjnnugahsbxhvsabdsavcash@#65565_*&^%#$",
};

module.exports = config;
