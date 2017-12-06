var VideoListEntryView = Backbone.View.extend({

  events: {
    'click' : 'handleClick'
  },

  handleClick : function() {
    var newPlayerView = new VideoPlayerView({model: this.model});
    //this.model.select();
    newPlayerView.render();
    console.log(newPlayerView, newPlayerView.model.get('title'));
  },

  initialize: function() {
    //listen for any changes in the video model and re-render
    this.on('select', console.log('in initialize, videolistentryview'));
  },

  render: function() {
    //console.log('from video list entry render function', this.model.attributes)
    //console.log('rendered from videolistentryview', this.model);
    var title = this.model.get('title');
    var description = this.model.get('description');
    var thumbnail = this.model.get('thumbnail');
    //dynamically set each video's data
    this.$el.html(this.template({ thumbnail: thumbnail, title: title, description: description }));

    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});


