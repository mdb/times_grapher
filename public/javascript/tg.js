if (typeof TG === 'undefined' || !TG) {
  var TG = {};
}

TG.overlay = (function ($) {
  var _self;

  _self = {
    init: function (triggerElem) {
      _self.trigger = typeof triggerElem !== 'undefined' ? $(triggerElem) : $('[data-role="overlay-trigger"]');
      var overlay;

      _self.trigger.click(function (evt) {
        evt.preventDefault();
        overlay = $(this).data('overlay');
        _self.open($(overlay));
      })
    },

    open: function (overlay) {
        var mask = $('#overlay-mask');

        mask.fadeIn('1000');
        _self.positionOverlay(overlay);
        overlay.fadeIn('fast');
        _self.setUpCloseClickHandlers(mask, overlay);
        _self.setUpCloseClickHandlers(overlay.find('.close'), overlay);
    },

    positionOverlay: function (overlay) {
        var winH = $(window).height(),
            winW = $(window).width();

        //Set the popup window to center
        overlay.css('top',  winH/2 - overlay.height()/2);
        overlay.css('left', winW/2 - overlay.width()/2);
    },

    setUpCloseClickHandlers: function ($elem, overlay) {
        $elem.click(function () {
            _self.close(overlay);
        });
    },

    close: function (overlay) {
        $('#overlay-mask').hide();
        overlay.hide();
    }
  };

  return _self;

})(jQuery);
