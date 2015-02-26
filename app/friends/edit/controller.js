import FriendsBaseController from '../base/controller.js';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('friends.show', this.get('model'));

      return false;
    }
  }
});
