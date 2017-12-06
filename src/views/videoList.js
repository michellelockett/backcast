var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    //this.on('change', console.log('initialize video list view'), this);
  },

  render: function() {
    //empty video list
    this.$el.children().detach();
    $('.list').empty();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this.$el;
  },

  renderVideo: function(video) {
    var videoEntry = new VideoListEntryView({model: video});
    this.$('.video-list').append(videoEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
