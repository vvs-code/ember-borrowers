import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v2' // http://api.ember-cli-101.com
});
