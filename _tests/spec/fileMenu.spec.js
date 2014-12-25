describe('File menu', function() {
  var view, collection = [], el;

  function initEl() {
    el = $('<nav id="mp-menu" class="mp-menu">\n' +
    '        <div class="mp-level">\n' +
    '            <h2 class="icon icon-world">Files</h2>\n' +
    '            <ul class="files">\n' +
    '            </ul>\n' +
    '            <ul class="menu-options">\n' +
    '                <li><button href="#" class="btn btn-primary">LOG</button></li>\n' +
    '                <li><button href="#" class="btn btn-primary">DELETE BATCH</button></li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </nav>');
  }

  function initCollections() {
    collection = new Toogether.Collections.Files();
    for(var i=0; i<5; i++) {
      collection.add(new Toogether.Models.File({
        'name': 'test'+i+'.jpg',
        'url': 'test'+i+'.jpg'
      }))
    }
  }

  function initView() {
    view = new Toogether.Views.FileMenuView({ el: el, trigger: $('<a href="#" class="fade">'), collection: collection });
  }

  beforeEach(function() {
    initEl();
    initCollections();
    initView();
  });
  it('shoud render on empty collections', function() {
    var view = new Toogether.Views.FileMenuView({ el: el, trigger: $('<a href="#" class="fade">')});
    expect(window.document.errors).toBe(undefined);
  });
  it('should render files', function() {
    expect(view.$files.children().length).toBe(5);
  });
  it('should show trigger button on load', function() {
    expect(view.$trigger.hasClass('in')).toBe(true);
  });
  it('should open menu on clicking trigger button', function() {
    view.$trigger.trigger('click', function() {
      expect(view.$el.find('.mp-level').hasClass('mp-level-open')).toBe(true);
    });
  });
  it('should update display on change', function() {
    collection.at(0).set('name', 'test');
    expect(view.$$files.children().first().text()).toBe('test');
  });
})