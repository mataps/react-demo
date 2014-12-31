(function($, window, document, Backbone, App, _) {
  App.Models.Card = Backbone.Model.extend();

  App.Views.Card = Backbone.View.extend({
    events: {
      "click .clear-btn": "clear",
      "click .delete-btn": "delete"
    },
    options: {
    },
    initialize: function(options) {
      this.options = _.defaults(options || {}, this.options);
      this.template = _.template(this.$el.html());

      var noteId = '#note-'+this.options.id;
      this.$el.attr('id', noteId);
      this.$el.find('.comments').attr('id', 'comment-'+this.options.id);
      this.$el.find('.tools .btn')
        .attr('data-target', '#comment-'+this.options.id);

      this.render();
    },
    clear: function(e) {
      this.$comments.html('');
    },
    delete: function(e) {
      if(confirm('This action cannot be undone. Are you sure?')) {
        this.remove();
      }
    },
    render: function(e) {
      //this.listenTo(this.collection, 'all', this.render);
      //
      this.$el
        .draggable({
          containment: '#main-wrapper',
          cancel:'#ngrip, .comments',
          stack: '.notes',
          snap: true,
          snapMode: 'inner'
        })
        .resizable({
          containment: '#main-wrapper',
          alsoResize: this.options.id + ' .contents',
          minHeight: 290,
          handles: {
            'n': this.$el.find('#ngrip')
          }
        }).css('position', 'absolute').position({
          of: $(this.options.container)
        });
      this.$comments = this.$el.find('.comments');
      this.$comments.wysiwyg({
        context: this.$el
      });
    }
  });

  App.Views.StickyComments = Backbone.View.extend({
    events: {},
    options: {},
    cards: [],
    initialize: function() {
      this.cardTemplate = $.parseHTML($('#notes-tmpl').html());
    },
    newCard: function() {
      var el = $($.parseHTML($('#notes-tmpl').html()));
      el.attr('id', 'temp');
      el.appendTo(this.$el);

      var card = new App.Views.Card({
        id: this.cards.length + 1,
        el: $('#temp'),
        container: this.$el
      });
      el.addClass('in');
      this.cards.push(card);
    },
    render: function() {}
  });

}(jQuery, window, document, Backbone, window.Toogether, _));