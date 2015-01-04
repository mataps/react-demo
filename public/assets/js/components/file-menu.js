(function($, window, document, Backbone, App, DiffRenderer, _, mlPushMenu) {
  App.Models.File = Backbone.Model.extend();
  App.Collections.Files = Backbone.Collection.extend();

  App.Views.FileMenu = Backbone.View.extend({
    el: '#mp-menu',
    events: {
      'click .files li > a': 'changePreview'
    },
    options: {
      $triggerEl: '',
      fileTemplate: _.template('<li><a class="icon icon-display" href="#" data-id="<%= id %>"><%= filename %></a></li>')
    },
    initialize: function(options) {
      this.options = _.defaults(options || {}, this.options);
      this.collection = this.collection || new App.Collections.Files;
      this.listenTo(this.collection, 'all', this.render);

      this.$triggerEl = this.options.$triggerEl || $('#toggle-menu');
      this.$files = this.$el.find('.files');

      //show trigger button
      this.$triggerEl.addClass('in');

      //init mlPushMenu
      new mlPushMenu(this.el, this.$triggerEl.get(0));

      this.render();
    },
    changePreview: function(e) {
      e.preventDefault();
      var id = $(this).attr('data-id');
      this.trigger('change-preview', this.collection.get(id));
    },
    render: function(e) {
      var self = this;
      self.$files.empty();
      this.collection.each(function(File) {
        self.$files.append(self.options.fileTemplate(File.attributes));
      });

      $.fn.editable.defaults.mode = 'inline';
      this.$files.find('li > a').editable({
        toggle: 'manual'
      }).on('dblclick doubletap', function(e) {
        e.preventDefault();
        $(this).editable('toggle');
      });
    }
  });

  //new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'toggle-menu' ) );
}(jQuery, window, document, Backbone, window.Toogether, DiffRenderer, _, mlPushMenu));