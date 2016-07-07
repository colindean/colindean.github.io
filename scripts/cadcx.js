var cadcx = {};
if(window.jQuery){
//domready
$(function($){

  $('#internal nav img').hover(
    function(e){
      var t = $(e.target);
      t.data('old',t.attr('src'));
      t.attr('src',t.data('old').replace('bw-',''));
    },
    function(e){
      var t = $(e.target);
      t.attr('src',t.data('old'));
    }
  );

  cadcx.preload_images();
  cadcx.init_lifestream();

});
//functions

  cadcx.images = new Array();

  cadcx.preload_images = function (){
    $.each($('#internal nav img'), function(){
      var e = $(this);
      var pl = e.attr('src').replace('bw-','');
      var i = new Image();
      i.src = pl;
      cadcx.images.push(i);
    });
  }

  cadcx.init_lifestream = function(){
    var c = 'colindean';
    var r = 'rhettigan';
    var personal_list = [
      { service: 'flickr', user: '33990010@N02' },
      { service: 'formspring', user: c },
      { service: 'googleplus',
          user: '111226947505864144715',
          key: 'AIzaSyB7rrr1VuMDf78z8xaUtxRWVuGJClaOfnY' },
      { service: 'lastfm', user: c },
      { service: 'reddit', user: c },
      { service: 'twitter', user: c },
      { service: 'wikipedia', user: 'cdean' },
      { service: 'youtube', user: r }
    ];
    var code_list = [
      { service: 'bitbucket', user: c },
      { service: 'github', user: c },
      { service: 'stackoverflow', user: '204052' },
      { service: 'vimeo', user: c },
    ];
    var blog_list = [
      {service: 'rss2', user: 'http://feeds.cad.cx/TheFlowOfConsciousness'}
      //{service: 'rss', user: 'http://www.pittco.org/blog/author/colin/feed/'}
    ];
    cadcx.pcount = cadcx.ccount = cadcx.bcount = 0;
    $(".personal.lifestream").lifestream({
      limit: 20,
      list: personal_list,
      feedloaded: cadcx.timeago(personal_list, cadcx.pcount)
    });
    $(".code.lifestream").lifestream({
      limit: 30,
      list: code_list,
      feedloaded: cadcx.timeago(code_list, cadcx.ccount)
    });
    $(".blog.lifestream").lifestream({
      limit: 10,
      list: blog_list,
      feedloaded: cadcx.timeago(blog_list, cadcx.bcount)
    });
  }

  cadcx.timeago = function(list, count){
    return function(){
      count++;
      if (count === list.length){
        $("#lifestream li").each(function(){
          var element = $(this);
          var date = new Date(element.data('time'));
          element.append('<time class="timeago" title="' + date.toISO8601(date) + '">'+date+"</time>");
        });
        $("#lifestream .timeago").timeago();
      }
    }
  }
}
