describe('Homepage', function() {
  $('<div id="main-content">').appendTo($('body'));

  beforeEach(function() {
    loadTmpl('home');
    this.view = new Toogether.Views.Home();
  });
  it('should have marker link', function() {
    expect(this.view.$el.find('a[href=#marker]').length).toBe(1);
  })
  it('should have approver link', function() {
    expect(this.view.$el.find('a[href=#approver]').length).toBe(1);
  })
});