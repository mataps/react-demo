describe('Page routes', function() {
  var router = new Toogether.Router();
  Backbone.history.stop();
  Backbone.history.start({pushState: true});

  it('should render Home', function() {
    var home = spyOn(Toogether.Views, 'Home');
    router.navigate('', true);
    expect(home).toHaveBeenCalled();
  })
  it('should render Marker and Filemenu', function() {
    var marker = spyOn(Toogether.Views, 'Marker');
    var fileMenu = spyOn(Toogether.Views, 'FileMenu');
    router.navigate('marker', true);
    expect(marker).toHaveBeenCalled();
    expect(fileMenu).toHaveBeenCalled();
  })
});