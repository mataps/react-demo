//$(function () {
//  //'use strict';
//  //var content = $('#content');
//  //var preview = $('.upload-preview-container');
//  //var fileUpload = $('#fileupload');
//  //
//  //// Initialize the jQuery File Upload widget:
//  //fileUpload.fileupload({
//  //  url: 'upload',
//  //  //dropZone: fileUpload,
//  //  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
//  //  maxFileSize: 10000000, // 10 MB
//  //  minFileSize: 1,
//  //  filesContainer: '.files',
//  //  autoUpload: true,
//  //  sequentialUploads: true,
//  //  fail: function(e, data) {
//  //    alert('Fail!');
//  //  },
//  //  completed: function(e, data) {
//  //    if (data.getNumberOfFiles() == 0) {
//  //      var lastFile = menu.fileMenu('option', 'getLastFile')();
//  //      preview.uploadPreview('setPreview', lastFile);
//  //      fileUpload.fileupload('disable');
//  //      fileUpload.addClass('fade');
//  //    }
//  //  }
//  //}).on('fileuploadadd', function(e, data) {
//  //  if (data.files.length) {
//  //    var file = data.files[0];
//  //    setTimeout(function() {
//  //      var error = data.files[0].error;
//  //      if (error) {
//  //        e.preventDefault();
//  //        $(data.context).remove();
//  //        alert(error);
//  //      }
//  //    }, 200);
//  //  }
//  //});
//  //
//  ////preview.uploadPreview({
//  ////  send: function(e) {
//  ////    $('#sendModal').modal('show');
//  ////  }
//  ////})
//  //
//  //var menu = $('#menu').fileMenu({
//  //  deleteBatch: function() {
//  //    if (confirm('deleting this batch is permanent and cannot be undone.'))
//  //    {
//  //      $.post('delete', function() {
//  //        menu.loadFiles().then(function() {
//  //          menu.refresh();
//  //        });
//  //      }).fail(function() {
//  //        alert('Error deleting the batch. Please try again.')
//  //      });
//  //    }
//  //  }
//  //});
//  //
//  //$('.menu-toggle a').click(function(e) {
//  //  e.preventDefault();
//  //  menu.fileMenu('toggle');
//  //});
//
//  var $leftMenu = $('#toggle-menu').fileMenu();
//  console.log($leftMenu);
//});

window.Toogether = {
  Models: {},
  Collections: {},
  Views: {}
}

Toogether.Router = Backbone.Router.extend({
  routes: {
    '':         'index',
    'marker':   'marker'
  },
  index: function(){
    Toogether.Views.home = new Toogether.Views.Home();
  },
  marker: function(id){
    Toogether.Collections.files = new Toogether.Collections.Files();
    Toogether.Views.fileMenu = new Toogether.Views.FileMenu({collection: Toogether.Collections.files});
    Toogether.Views.marker = new Toogether.Views.Marker({collection: Toogether.Collections.files});
  }
});

$(function() {
  if (typeof window.testEnv !== 'undefined')
    return;

  //var fileMenu;
  //
  //$('#marker-btn').on('click', function() {
  //  fileMenu = new Toogether.Views.FileMenuView({
  //    el: $('#mp-menu'),
  //    trigger: $('#toggle-menu')
  //  });
  //  $('#main-content h1.animated').hide();
  //});

  //var fileMenu = new Toogether.Views.FileMenuView({
  //  el: $('#mp-menu'),
  //  trigger: $('#toggle-menu')
  //});
  //
  //var stickyComment = new Toogether.Views.StickyComment({});

  //var fileUpload = $('#fileupload');
  //fileUpload.fileupload({
  //  url: 'upload',
  //  //dropZone: fileUpload,
  //  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
  //  maxFileSize: 10000000, // 10 MB
  //  minFileSize: 1,
  //  filesContainer: '.files',
  //  autoUpload: false,
  //  sequentialUploads: true,
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

  new Toogether.Router;
  Backbone.history.start();
});