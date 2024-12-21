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

  cadcx.play_name = function () {
    // http://ipa-reader.xyz/?text=k%C9%92l%C9%AAn%20din
    // got the b64 response from the service
    b64_mpeg_data = "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\nrPn/82DEqR+yuoW+0wSwaDOg05DF8ngkgcQkPbJ/Y+pzmUhGkGEOg8xFagq5w+hJ3Jzn/7MyCxmI\nKqwcK7nsouxEnV1///qytM6XKeFCCDzIMZFGkDNi0f/V8X+uwyl4aLUFnQUsCVVDDnNdTJOYWzEl\ndRR2ZRGsbvyyQPMSGpJUbn1/4ZPnqxUf//9qJORw5dlYcC3ssiYgQbc71///82LEuR+6znm20YrQ\n1Xo6DhkjDibhNC+XhzoF40ckRhzQvI6kq5qdM3OnKbmKKieigbGpemRicQLpq7mDJPSf/9/0tT6z\nQXJix4VdZ////2Qr9KpBtQ0p2gNC5ghVHHkMkxVSvLTR1hsHLmVMw2QWpTLdb12iVUSSqqmWJJbM\nmkiWyxKtw1F4BiRLQUkSJEkv////3NBSSwUJciok//NixMogCqaA/smavOaicSSr///+iwCj3Y4k\nS1iWUZ+hkN6lb//6BRKw0JZUJhoKiUt////qBqd/6gCECvGafgbJCdA8wq8ejWejizLzcqZZ2epO\nNEmXG5st/8qaNKKuLzflHFtfepKKvP5ospr//Z2b+ak4SKFCzLZyiyij4vNmnduzs7O7PG5v7tub\nNGlFWz1JxoEUfFxubL//1P/zYsTZHYJuVCLBhPycWWzs7OUWXG/s7O///dnf/9pOLLi2dnZ3jc3K\nlmdv3o044tnZzjRQo8yxKv3WCaZMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq\nqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq\nqqr/82DE8ySz3alIekwBqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq\nqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq\nqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=\n";

      var source = '<source src="data:audio/mpeg;base64,' + b64_mpeg_data + '" type="audio/mpeg"></source>';
      var audio = '<audio class="pronunciation-player" autoplay="true">' + source + '</audio>';
      $('.pronunciation').prepend(audio);
  }

  $('.pronunciation').click((e) => { e.preventDefault(); cadcx.play_name(); });

}
