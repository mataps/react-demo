+(function() {

  var _compiled, _renderer, _files = [];

  $.widget( "approview.fileMenu", {
    // Default options.
    options: {
      log: function() {},
      deleteBatch: function() {},
      templateUrl: '/assets/js/file-menu.html',
      containersToPush: [$('#content')],
      menuWidth: '250px',
      menuHeight: '100vh',
      collapsed: true,
      overlapWidth: 0,
      getLastFile: function() {
        return _files[_files.length - 1];
      }
    },
    _create: function() {
      DiffRenderer.start();

      var self = this;
      _renderer = new DiffRenderer(this.element.get(0));

      $.fn.editable.defaults.mode = 'inline';

      $.get(this.options.templateUrl, function(template) {
        self.loadFiles().then(function(res) {
          _compiled = _.template(template);
          self.refresh();
          setTimeout(function() {
            //init push menu plugin
            self.element.multilevelpushmenu({
              containersToPush: self.options.containersToPush,
              menuWidth: self.options.menuWidth,
              menuHeight: self.options.menuHeight,
              collapsed: self.options.collapsed,
              overlapWidth: self.options.overlapWidth
            });
            self.setActiveFile();
            self._initListeners();
          }, 500);
        })
      });
    },
    _initListeners: function() {
      var self = this;
      this.element.multilevelpushmenu('option', 'onItemClick', function(e) {
        var elem = $(e.currentTarget);
        if (elem.hasClass('edit-button')) {
          elem.siblings('.editable').editable('toggle');
        }
        if (elem.hasClass('delete-batch-btn')) {
          self.options.deleteBatch(e);
        }
      });
      this.element.multilevelpushmenu('option', 'onCollapseMenuStart', this._applyToggle);
      this.element.multilevelpushmenu('option', 'onExpandMenuStart', this._applyToggle);
      this.element.multilevelpushmenu('option', 'containersToPush')[0].on('click', '.upload-preview-container-overlay', function(e) {
        e.preventDefault();
        self.toggle();
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
        console.log('Files loaded: ', res);
      });
    },
    _applyToggle: function() {
      $(this).multilevelpushmenu('option', 'containersToPush')[0].find('.upload-preview-container-overlay').toggleClass('in');
    },
    toggle: function() {
      if (this.element.multilevelpushmenu('visiblemenus')) {
        this.element.multilevelpushmenu('collapse');
      } else {
        this.element.multilevelpushmenu('expand');
      }
    },
    setActiveFile: function(fileName) {
      this.element.find('.file-names').removeClass('active');

      if (typeof fileName === 'undefined') {
        var lastFile = this.options.getLastFile();
        if (typeof lastFile !== 'undefined') {
          fileName = lastFile.name;
        }
      }
      this.element.find('.file-names:contains("'+fileName+'")').addClass('active');
    },
    refresh: function() {
      var self = this;
      var content = _compiled({
        files: _files
      });
      _renderer.update(content);
      DiffRenderer.render();
      setTimeout(function() {
        self.element.find('.editable').editable({
          type: 'text',
          toggle: 'manual'
        }).on('shown', function(e, editable) {
          $(this).siblings('.edit-button').hide();
        }).on('hidden', function() {
          $(this).siblings('.edit-button').show();
        });
      }, 500);
    }
  });
})();