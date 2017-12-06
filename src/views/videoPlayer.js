var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //this.on('select', this.render, this);
  },

  render: function() {
    $('.player').empty();
    this.$el.html(this.template({title: this.model.get('title'), description: this.model.get('description'), id: this.model.get('id')}));
    console.log(this.model.get('title'));
    //how to figure out where to append this?
    $('.player').append(this.$el);
    return this.$el;

  },

  template: templateURL('src/templates/videoPlayer.html')

});
