const { Sequelize } = require('sequelize');

function getTimeZone() {
  var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}
const sequelize = new Sequelize('setup', 'gynrdvrmsc61tza9ofho', 'pscale_pw_tUgXq5JQbmOPDLWPmD4tAg9XsiJJOtS4QxuPO02enYT', {
  host: 'aws.connect.psdb.cloud',
  // port:'42622',
  dialect: 'mysql' ,
  "timezone": "+05:30",
    "dialectOptions": {
      ssl: {
        required: false,
      },
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
