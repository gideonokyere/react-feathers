// Initializes the `taco` service on path `/taco`
const createService = require('feathers-sequelize');
const createModel = require('../../models/taco.model');
const hooks = require('./taco.hooks');
const filters = require('./taco.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'taco',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/taco', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('taco');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
