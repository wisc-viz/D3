$.fn.extend({
  lasso: function () {
    return this
    .mousedown(function (e) {
      // left mouse down switches on "capturing mode"
      if (e.which === 1 && !$(this).is(".lassoRunning")) {
        $(this).addClass("lassoRunning");
        $(this).data("lassoPoints", []);
      }
      e.originalEvent.preventDefault();
    })
    .mouseup(function (e) {
      // left mouse up ends "capturing mode" + triggers "Done" event
      if (e.which === 1 && $(this).is(".lassoRunning")) {
        $(this).removeClass("lassoRunning");
        $(this).trigger("lassoDone", [$(this).data("lassoPoints")]);          
      }
    })
    .mousemove(function (e) {
      // mouse move captures co-ordinates + triggers "Point" event
      if ($(this).is(".lassoRunning")) {
        var point = [e.offsetX, e.offsetY];
        $(this).data("lassoPoints").push(point);
        $(this).trigger("lassoPoint", [point]);
      }
    });
  }
});