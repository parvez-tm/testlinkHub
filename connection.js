const { Sequelize } = require('sequelize');

function getTimeZone() {
  var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
  return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}
const sequelize = new Sequelize('setup', '2wkvlwt7zgyb0abcde9m', 'pscale_pw_rKphKSHa5ldd8N9WoDDPfq33XUPylKwMQePXUl7e1bv', {
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
