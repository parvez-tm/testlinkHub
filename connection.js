const { Sequelize } = require('sequelize');
const fs = require('fs');

function getTimeZone() {
  var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}
const sequelize = new Sequelize('sql11666344', 'sql11666344', 'x3D6G3Bm6G', {
  host: 'sql11.freemysqlhosting.net',
  port:'3306',
  dialect: 'mysql' ,
  // "timezone": getTimeZone(),
    "dialectOptions": {
      // ssl: {
      //   ca: fs.readFileSync(process.env.DB_CA_PATH, "utf8"),
      // }
    },
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// sequelize.sync();

module.exports = sequelize;
