import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    'model.notes',
    function() {
      return !Ember.isEmpty(this.get('model.description')) &&
      !Ember.isEmpty(this.get('model.notes'));
    }
  ),
  actions: {
    save: function() {
      if(this.get('isValid')) {
        this.get('model').save();
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
        return false;
      }
    },
  }
});
