describe('File upload form', function() {
  $('<div id="main-content">').appendTo($('body'));
  beforeEach(function() {
    loadTmpl('file-upload');
    this.view = new Toogether.Views.Fileupload();
  });
  it('should render file upload form', function() {
    expect(this.view.$el.find('form#fileupload').length).toBe(1);
  })
  it('should upload files on drag', function() {
    var param = {files: [{name: 'test'}]};
    this.view.$form.fileupload('add', param);
  })
});