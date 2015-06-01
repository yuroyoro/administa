
export default {
  // http://projects.lukehaas.me/css-loaders/
  // http://w3lessons.info/2014/01/26/showing-busy-loading-indicator-during-an-ajax-request-using-jquery/

  setup() {
    jQuery(document).ajaxStart(() => {
      //show ajax indicator
      this.start('Loading...');
    }).ajaxStop(() => {
      //hide ajax indicator
      this.stop();
    });
  },

  start(text) {
    if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading'){
      jQuery('body').
        append('<div id="resultLoading" style="display:none"><div class="bg"></div><div class="loader">'+text+'</div></div>');
    }

    jQuery('#resultLoading').css({
      'width':'100%',
      'height':'100%',
      'position':'fixed',
      'z-index':'10000000',
      'top':'0',
      'left':'0',
      'right':'0',
      'bottom':'0',
      'margin':'auto'
    });

    jQuery('#resultLoading .bg').css({
      'background':'#000000',
      'opacity':'0.7',
      'width':'100%',
      'height':'100%',
      'position':'absolute',
      'top':'0'
    });

    jQuery('#resultLoading > div:last').css({
      // 'width': '250px',
      // 'height':'75px',
      // 'text-align': 'center',
      'position': 'fixed',
      'top':'0',
      'left':'0',
      'right':'0',
      'bottom':'0',
      'margin':'auto',
      // 'font-size':'16px',
      'z-index':'10',
      // 'color':'#ffffff'

    });

    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeIn(300);
    jQuery('body').css('cursor', 'wait');
  },


  stop() {
    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeOut(300);
    jQuery('body').css('cursor', 'default');
  }
}
