(function($, window, document, Backbone, App, DiffRenderer, _) {
  App.Models.Note = Backbone.Model.extend();

  App.Views.StickyComment = Backbone.View.extend({
    events: {
    },
    options: {
      trigger: '',
      fileTemplate: _.template('test')
    },
    initialize: function(options) {
      this.$el = $('.notes');
      this.$comments = this.$el.find('.comments');
      this.options = _.defaults(options || {}, this.options);
      //this.listenTo(this.collection, 'all', this.render);
      //this.renderer = new DiffRenderer(this.$files.get(0));


      this.$el
        .draggable({
          containment: '#main-wrapper, #ngrip',
          cancel:'.comments'
        })
        .resizable({
          containment: '#main-wrapper',
          alsoResize: '.contents',
          minHeight: 290,
          handles: {
            'n': this.$el.find('#ngrip')
          }
      });
      this.$comments.wysiwyg();

      this.render();
    },
    render: function(e) {
      var self = this;
      //self.$$files.empty();
      //this.collection.each(function(File) {
      //  self.$$files.append(self.options.fileTemplate(File.attributes));
      //});
      //this.renderer.update(self.$$files.html());
      //DiffRenderer.render();
    }
  });

}(jQuery, window, document, Backbone, window.Toogether, DiffRenderer, _));