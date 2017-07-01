// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const taco = sequelizeClient.define('taco', {
    meat: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cheese: {
      type: Sequelize.STRING,
      allowNull: false
    },
    salsa: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });

  taco.associate = function (models) { // eslint-disable-line no-unused-vars

  };

  return taco;
};
