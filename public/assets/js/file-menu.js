+(function() {

  var _compiled, _renderer, _files = [];

  $.widget( "approview.fileMenu", {
    // Default options.
    options: {
      log: function() {},
      deleteBranch: function() {},
      templateUrl: '/assets/js/file-menu.html',
      containersToPush: [$('#content')],
      menuWidth: '300px',
      menuHeight: '100vh',
      collapsed: true
    },
    _create: function() {
      DiffRenderer.start();

      var self = this;
      _renderer = new DiffRenderer(this.element.get(0))

      $.get(this.options.templateUrl, function(template) {
        self.loadFiles().then(function() {
          _compiled = _.template(template);
          self.refresh();
          self._initListeners();
        })
      });
    },
    _initListeners: function() {
      this.element.multilevelpushmenu({
        containersToPush: this.options.containersToPush,
        menuWidth: this.options.menuWidth,
        menuHeight: this.options.menuHeight,
        collapsed: this.options.collapsed
      });
    },
    _setOption: function(key, value) {
      this._super(key, value);
    },
    _setOptions: function(options) {
      this._super(options);
      this.refresh();
    },
    loadFiles: function() {
      return $.get('/files', function(res) {
        _files = res.data;
      });
    },
    refresh: function() {
      var content = _compiled({
        files: _files
      });
      _renderer.update(content);
      DiffRenderer.render();
    }
  });
})();