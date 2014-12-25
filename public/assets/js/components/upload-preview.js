+(function() {

  var fileName, imageSrc, compiled, renderer, progress = 0;

  $.widget( "approview.uploadPreview", {
    // Default options.
    options: {
      update: function() {},
      send: function() {},
      delete: function() {},
      templateUrl: '/assets/js/upload-preview.html'
    },
    _create: function() {
      DiffRenderer.start();

      var self = this;
      renderer = new DiffRenderer(this.element.get(0))

      $.get(this.options.templateUrl, function(template) {
        compiled = _.template(template);
        self.refresh();
        self._initListeners();
      });
    },
    _initListeners: function() {
      this.element.on('click', '#send', this.options.send);
    },
    _setOption: function(key, value) {
      this._super(key, value);
    },
    _setOptions: function(options) {
      this._super(options);
      this.refresh();
    },
    refresh: function() {
      var content = compiled({
        filename: fileName,
        imageSrc: imageSrc,
        progress: progress
      });
      renderer.update(content);
      this.element.find('.fileupload-progress').addClass('in');
    },
    setFilename: function(new_fileName) {
      fileName = new_fileName;
      this.element.addClass('in');
      this.refresh();
    },
    setImageSrc: function(new_imageSrc) {
      imageSrc = new_imageSrc;
      this.refresh();
      this.element.find('.img-preview').addClass('in');
    },
    setProgress: function(value) {
      progress = value;
      this.refresh();
    },
    setPreview: function(value) {
      this.setFilename(value.name);
      this.setImageSrc(value.thumbnailUrl);
    }
  });
})();