$(function () {
  'use strict';
  var content = $('#content');
  var preview = $('.upload-preview-container');
  var fileUpload = $('#fileupload');

  // Initialize the jQuery File Upload widget:
  fileUpload.fileupload({
    url: 'upload',
    dropZone: fileUpload,
    add: function (e, data) {
      preview.uploadPreview('setFilename', data.files[0].name);
      data.context = preview;
      data.submit();
    },
    done: function (e, data) {
      preview.uploadPreview('setImageSrc', data.result);
      fileUpload.fileupload('disable');
      fileUpload.addClass('fade');
    }
  });

  preview.uploadPreview({
    send: function(e) {
      $('#sendModal').modal('show');
    }
  })

  $('#menu').fileMenu();
});
