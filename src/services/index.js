const graphql = require('./graphql/graphql.service.js');
const taco = require('./taco/taco.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(taco);
  app.configure(graphql);
};
