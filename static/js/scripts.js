(function($){
  
  $(document).ready(function() {
    
    $('#icons a').hover(function() {
      var dies = $(this);
      $('#bubbles .' + dies.parent().attr('class')).toggle();
    });
    
    if( $('#current').length !== 0 )    
      $.getJSON('http://api.dribbble.com/players/kbfrench/shots?callback=?', function(data) {
        if( data && data.shots ) populateCurrent( data.shots)
      });
  });
  
  function populateCurrent ( shots ) {
    var list = $('#current ul'),
        li = $('<li>'),
        a = $('<a>'),
        img = $('<img>');
      
    $.each(shots, function(i, shot) {
      var lii = li.clone(),
          aa = a.clone(),
          imgg = img.clone().attr('src', shot.image_teaser_url);
      
      aa.attr('href', shot.url);
      
      if( i === 0 || (i % 3 === 0) ) lii.addClass('first');
      
      aa.append(imgg).append(shot.title);
      lii.append(aa).appendTo(list);
    });
  }

})(jQuery);