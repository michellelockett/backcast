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
      el: this.$('.search'),
      collection: this.videos
    }).render();

    //render the player with the first video in the list to begin
    new VideoPlayerView({
     el: this.$('.player'),
     model: this.videos.first()
    }).render();

    //return the appview
    return this;
  },
  template: templateURL('src/templates/app.html')
});


