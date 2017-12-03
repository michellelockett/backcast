var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    //set the html for appView
    this.$el.html(this.template());

    //render the video list
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    //render the search
    new SearchView({
      el: this.$('.search')
    }).render()

    //render the player
    new VideoPlayerView({
     el: this.$('.player')
    }).render()

    //return the appview
    return this;
  },
  template: templateURL('src/templates/app.html')
});


