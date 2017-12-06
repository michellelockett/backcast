var SearchView = Backbone.View.extend({


  initialize: function() {

  },

  events: {
    'click button': 'updateVids',
    'keypress' : 'checkEnter'
  },

  updateVids: function() {
    this.collection.search();
  },

  checkEnter: function(e) {
    if (e.which == 13) {
      this.updateVids();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
