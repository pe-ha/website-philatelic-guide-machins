$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top-400) {
          $(".navbar-default").css('background-color', 'rgb(68,68,68)');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
});







