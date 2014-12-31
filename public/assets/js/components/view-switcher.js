(function($, window, document, Backbone, App, DiffRenderer, _) {

  App.Views.FileMenuView = Backbone.View.extend({
    events: {
    },
    options: {
      trigger: '',
      fileTemplate: _.template('<li><a class="icon icon-display" href="#"><%= name %></a></li>')
    },
    initialize: function(options) {
      this.options = _.defaults(options || {}, this.options);
      this.collection = this.collection || new App.Collections.Files;
      this.listenTo(this.collection, 'all', this.render);

      this.$trigger = this.options.trigger;
      this.$files = this.$el.find('.files');
      this.$$files = this.$files.clone();
      this.renderer = new DiffRenderer(this.$files.get(0));

      //show trigger button
      this.$trigger.addClass('in');

      //init mlPushMenu
      new mlPushMenu(this.el, this.$trigger.get(0));

      $.fn.editable.defaults.mode = 'inline';
      this.$files.find('li > a').editable({
        toggle: 'manual'
      }).on('dblclick doubletap', function() {
        $(this).editable('toggle');
      }).doubletap();

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