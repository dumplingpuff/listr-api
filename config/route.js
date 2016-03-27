// blogposts route

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      blogposts: this.store.findAll('blogpost'),
      comments: this.store.findAll('blogpost'),
    };
  },
  actions: {
    createPost: function(form) {
      console.log('Route Action: createPost');
      this.store.createRecord('blogposts', form)
        .save().then(() => console.log('Record is Created'));
    },
    updatePost: function(post) {
      console.log('Route Action: update Post');
      post.save();
    },
    destroyPost: function(post) {
      console.log('Route Action: Destroy Post');
      post.destroyRecord();
    }
  }
});
