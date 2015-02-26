import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // pass-in
  articleStates: null, // pass-in
  actions: {
    saveArticle: function(article) {
      this.sendAction('save', article);
    }
  }
});
