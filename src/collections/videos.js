var Videos = Backbone.Collection.extend({

  model: Video,

  search: function() {
    var q = $('.form-control').val() || 'cats';

    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {q: q, maxResults: 5, key: YOUTUBE_API_KEY, part: 'snippet', type: 'video', videoEmbeddable: 'true'},
      success: function(data) {
        console.log(data);
        var collection = new Videos(data.items);
        var view = new VideoListView({collection: collection})
        console.log(view);
        $('.list').append(view.render());
      },
      error: function(e) {
        console.log(e);
      }

    });
  }

});


//https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true