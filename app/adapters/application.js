import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api' // http://api.ember-cli-101.com
});
