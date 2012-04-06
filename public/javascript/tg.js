if (typeof TG === 'undefined' || !TG) {
  var TG = {};
}

TG.lightbox = (function ($) {
  var _self;

  _self = {
    init: function (triggerElem) {
      _self.trigger = typeof triggerElem !== 'undefined' ? $(triggerElem) : $('[data-role="overlay-trigger"]');
      var overlay;

      _self.trigger.click(function (evt) {
        overlay = $(this).data('overlay');
        _self.open($(overlay));
        return false;
      })
    },

    open: function (overlay) {
      console.log(overlay);
    }
  };

  return _self;

})(jQuery);
