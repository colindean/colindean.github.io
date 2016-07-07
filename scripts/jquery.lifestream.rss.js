(function($) {
$.fn.lifestream.feeds.rss2 = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${id}">${title.content}</a>'
    },
    config.template),

  /**
   * Parse the input from rss feed
   */
  parseRSS = function( input ) {
    var output = [], list, i = 0, j;
    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.feed.entry;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i];

        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url="'
      + config.user + '"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseRSS(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
