import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('friend');
  },
  actions: {
    delete: function(friend) {
      var _this = this;
      friend.destroyRecord().then(function() {
        _this.transitionTo('friends.index');
      });
    }
  }
});
