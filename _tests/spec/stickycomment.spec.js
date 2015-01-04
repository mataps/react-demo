//describe('Sticky comments', function() {
//  var view, collection = [], el;
//
//  function initEl() {
//    el = $(loadTmpl('stickycomment.tmpl.html'));
//  }
//
//  function initCollections() {
//    //collection = new Toogether.Collections.Files();
//    //for(var i=0; i<5; i++) {
//    //  collection.add(new Toogether.Models.File({
//    //    'name': 'test'+i+'.jpg',
//    //    'url': 'test'+i+'.jpg'
//    //  }))
//    //}
//  }
//
//  function initView() {
//    view = new Toogether.Views.StickyComment({ el: el, trigger: $('<a href="#" class="fade">') });
//  }
//
//  beforeEach(function() {
//    initEl();
//    initCollections();
//    initView();
//  });
//  it('should bind click to trigger button', function() {
//    view.$trigger.trigger('click');
//  });
//})