describe('Marker page', function() {
  $('<div id="main-content">').appendTo($('body'));
  it('should have upload form', function() {
    var fileupload = spyOn(Toogether.Views, 'Fileupload');
    this.view = new Toogether.Views.Marker();
    expect(fileupload).toHaveBeenCalled();
  })
});