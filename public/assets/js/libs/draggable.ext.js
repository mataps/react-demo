(function($) {

  var drag = function( event, ui, inst ) {
    var ts, bs, ls, rs, l, r, t, b, i, first,
      o = inst.options,
      d = o.snapTolerance,
      x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
      y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

    for (i = inst.snapElements.length - 1; i >= 0; i--){

      l = inst.snapElements[i].left - inst.margins.left;
      r = l + inst.snapElements[i].width;
      t = inst.snapElements[i].top - inst.margins.top;
      b = t + inst.snapElements[i].height;

      if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
        if (inst.snapElements[i].snapping) {
          (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
        }
        inst.snapElements[i].snapping = false;
        continue;
      }

      if (o.snapMode != 'inner' && o.snapMode != 'innerTop' && o.snapMode != 'innerBottom' && o.snapMode != 'innerLeft' && o.snapMode != 'innerRight' && o.snapMode != 'outerTop' && o.snapMode != 'outerBottom' && o.snapMode != 'outerLeft' && o.snapMode != 'outerRight') {
        var ts = Math.abs(t - y2) <= d;
        var bs = Math.abs(b - y1) <= d;
        var ls = Math.abs(l - x2) <= d;
        var rs = Math.abs(r - x1) <= d;
        if (ts) ui.position.top = inst._convertPositionTo("relative", {
          top: t - inst.helperProportions.height,
          left: 0
        }).top - inst.margins.top;
        if (bs) ui.position.top = inst._convertPositionTo("relative", {
          top: b,
          left: 0
        }).top - inst.margins.top;
        if (ls) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: l - inst.helperProportions.width
        }).left - inst.margins.left;
        if (rs) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: r
        }).left - inst.margins.left;
      }

      var first = (ts || bs || ls || rs);

      if (o.snapMode != 'outer' && o.snapMode != 'innerTop' && o.snapMode != 'innerBottom' && o.snapMode != 'innerLeft' && o.snapMode != 'innerRight' && o.snapMode != 'outerTop' && o.snapMode != 'outerBottom' && o.snapMode != 'outerLeft' && o.snapMode != 'outerRight') {
        var ts = Math.abs(t - y1) <= d;
        var bs = Math.abs(b - y2) <= d;
        var ls = Math.abs(l - x1) <= d;
        var rs = Math.abs(r - x2) <= d;
        if (ts) ui.position.top = inst._convertPositionTo("relative", {
          top: t,
          left: 0
        }).top - inst.margins.top;
        if (bs) ui.position.top = inst._convertPositionTo("relative", {
          top: b - inst.helperProportions.height,
          left: 0
        }).top - inst.margins.top;
        if (ls) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: l
        }).left - inst.margins.left;
        if (rs) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: r - inst.helperProportions.width
        }).left - inst.margins.left;
      }

      if (o.snapMode == 'innerTop') {
        var ts = Math.abs(t - y1) <= d;
        if (ts) ui.position.top = inst._convertPositionTo("relative", {
          top: t,
          left: 0
        }).top - inst.margins.top;
      }

      if (o.snapMode == 'innerBottom') {
        var bs = Math.abs(b - y2) <= d;
        if (bs) ui.position.top = inst._convertPositionTo("relative", {
          top: b - inst.helperProportions.height,
          left: 0
        }).top - inst.margins.top;
      }

      if (o.snapMode == 'innerLeft') {
        var ls = Math.abs(l - x1) <= d;
        if (ls) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: l
        }).left - inst.margins.left;
      }

      if (o.snapMode == 'innerRight') {
        var rs = Math.abs(r - x2) <= d;
        if (rs) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: r - inst.helperProportions.width
        }).left - inst.margins.left;
      }


      if (o.snapMode == 'outerTop') {
        var ts = Math.abs(t - y2) <= d;
        if (ts) ui.position.top = inst._convertPositionTo("relative", {
          top: t - inst.helperProportions.height,
          left: 0
        }).top - inst.margins.top;
      }

      if (o.snapMode == 'outerBottom') {
        var bs = Math.abs(b - y1) <= d;
        if (bs) ui.position.top = inst._convertPositionTo("relative", {
          top: b,
          left: 0
        }).top - inst.margins.top;
      }

      if (o.snapMode == 'outerLeft') {
        var ls = Math.abs(l - x2) <= d;
        if (ls) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: l - inst.helperProportions.width
        }).left - inst.margins.left;
      }

      if (o.snapMode == 'outerRight') {
        var rs = Math.abs(r - x1) <= d;
        if (rs) ui.position.left = inst._convertPositionTo("relative", {
          top: 0,
          left: r
        }).left - inst.margins.left;
      }

      if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
        (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
      }
      inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

    }

  };

  $.ui.draggable.prototype.plugins.drag.forEach(function(plugin) {
    if (plugin[0] == 'snap') {
      plugin[1] = drag;
    }
  });

})(jQuery);