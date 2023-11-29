const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');


class ProjectManager extends Model {}

ProjectManager.init({
  projectName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING
  },
  link: {
    type: DataTypes.STRING
  },
  created_on: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  password : {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'ProjectManager'
});

module.exports = ProjectManager;
