describe('VideoListEntryView', function() {
  var model, view;

  beforeEach(function() {
    model = new Video(fakeVideoData[0]);
    sinon.spy(model, 'select');

    view = new VideoListEntryView({ model: model });
    view.template = _.template('<div class="video-list-entry-title"><%= title %></div>');
    view.render();  // re-render with test template
    console.log(view.el, 'from video list entry spec, view.el');
  });

  it('should render a video\'s content', function() {
    expect(view.el.innerHTML).to.equal('Cute cat video');
  });

  it('should call select on the model when the title is clicked', function() {
    view.$('.video-list-entry-title').click();
    expect(model.select).to.have.been.called;
  });

});