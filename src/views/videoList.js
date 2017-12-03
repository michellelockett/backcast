var VideoListView = Backbone.View.extend({

  initialize: function() {

  },

  render: function() {
    //empty video list
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var title = video.attributes.snippet.title;
    var description = video.attributes.snippet.description;
    console.log(title, description);
    var videoEntry = new VideoListEntryView({model: video});
    this.$el.append(videoEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});

// this.snippet.title, this.snippet.description