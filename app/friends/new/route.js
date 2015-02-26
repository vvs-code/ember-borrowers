import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },
  actions: {
    save: function() {
      console.log('+_ save action in friends bubled to friends/new router', this, arguments);
      return true;
    },
    cancel: function() {
      console.log('+_ cancel action in friends bubled to friends/new router', this, arguments);
      return true;
    }
  }
});
