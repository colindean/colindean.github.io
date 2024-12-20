var cadcx = {};
if (window.jQuery) {
  //domready
  $(function ($) {

    $('#internal nav img').hover(
      function (e) {
        var t = $(e.target);
        t.data('old', t.attr('src'));
        t.attr('src', t.data('old').replace('bw-', ''));
      },
      function (e) {
        var t = $(e.target);
        t.attr('src', t.data('old'));
      }
    );

    cadcx.preload_images();
   

  });
  //functions

  cadcx.images = new Array();

  cadcx.preload_images = function () {
    $.each($('#internal nav img'), function () {
      var e = $(this);
      var pl = e.attr('src').replace('bw-', '');
      var i = new Image();
      i.src = pl;
      cadcx.images.push(i);
    });
  }

}
