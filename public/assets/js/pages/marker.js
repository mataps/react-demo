(function($, window, document, Backbone, App, _) {

  App.Views.Marker = Backbone.View.extend({
    el: '#main-content',
    initialize: function() {
      var self = this;
      this.uploadForm = new App.Views.Fileupload({el: this.$el});
      this.uploadForm.on('file-uploaded', function(e) {
        self.collection.add(new App.Models.File(e[0]));
      });
      App.Views.fileMenu.on('change-preview', function(File) {
        self.uploadForm.setPreview(File);
      })
    }
  });

}(jQuery, window, document, Backbone, window.Toogether, _));