(function($, window, document, Backbone, App, _) {

  App.Views.Fileupload = Backbone.View.extend({
    el: '#main-content',
    options: {
      fileTemplate: _.template('<li><a class="icon icon-display" href="#"><%= name %></a></li>')
    },
    initialize: function(options) {
      this.template = JST['file-upload'];
      this.assetTemplate = JST['asset'];
      this.render();
    },
    onAdd: function(e, data) {
      var self = this;
      this.$form.hide();
      this.$preview.removeClass('hidden');

      data.process(function () {
        return self.$form.fileupload('process', data);
      }).always(function () {
        var asset = $(self.assetTemplate(data.files[0]));
        $(data.files[0].preview).addClass('img-responsive img-preview').appendTo(asset);
        self.$preview.find('.upload-preview-inner').append(asset);
        data.context = asset;
      }).done(function () {
        self.$preview.addClass('working');
        if (self.$preview.find('.asset').length > 1) {
          self.$preview.addClass('multiple');
        }
        data.context.addClass('uploading');
        data.submit();
      });
    },
    onProgress: function(e, data) {
      var progress = Math.floor(data.loaded / data.total * 100);
      if (data.context) {
        data.context.each(function () {
          $(this).find('.progress')
            .attr('aria-valuenow', progress)
            .children().first().css(
            'width',
            progress + '%'
          );
        });
      }
    },
    onDone: function(e, data) {
      data.context.removeClass('uploading').hide();
      this.trigger('file-uploaded', data.result);
      if (this.$preview.find('.asset.uploading').length === 0) {
        this.trigger('complete');
      }
    },
    render: function() {
      this.$el.html(this.template());
      this.$form = this.$el.find('#fileupload');
      this.$preview = this.$el.find('.upload-preview');
      this.$form.fileupload({
        url: 'upload',
        //dropZone: fileUpload,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 10000000, // 10 MB
        minFileSize: 1,
        filesContainer: '.files',
        autoUpload: true,
        sequentialUploads: true,
        add: $.proxy(this.onAdd, this),
        progress: $.proxy(this.onProgress, this),
        done: $.proxy(this.onDone, this),
        previewMaxWidth: '100%',
        previewMaxHeight: '100%'
      });
      //  fail: function(e, data) {
      //    alert('Fail!');
      //  },
      //  completed: function(e, data) {
      //    if (data.getNumberOfFiles() == 0) {
      //      var lastFile = menu.fileMenu('option', 'getLastFile')();
      //      preview.uploadPreview('setPreview', lastFile);
      //      fileUpload.fileupload('disable');
      //      fileUpload.addClass('fade');
      //    }
      //  }
      //}).on('fileuploadadd', function(e, data) {
      //  if (data.files.length) {
      //    var file = data.files[0];
      //    setTimeout(function() {
      //      var error = data.files[0].error;
      //      if (error) {
      //        e.preventDefault();
      //        $(data.context).remove();
      //        alert(error);
      //      }
      //    }, 200);
      //  }
      //});
    }
  });

}(jQuery, window, document, Backbone, window.Toogether, _));