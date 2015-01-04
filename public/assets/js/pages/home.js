(function($, window, document, Backbone, App, _) {

  App.Views.Home = Backbone.View.extend({
    el: '#main-content',
    initialize: function() {
      this.template = _.template(JST['home']());
      this.render();
    },
    render: function() {
      this.$el.html(this.template());
    }
  });

}(jQuery, window, document, Backbone, window.Toogether, _));