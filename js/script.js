     $(document).ready(function()
{  
	$('dd').hide();
 	$('dt').click(function()
	{
		var parent = $(this).parent(), 
			ukazka = $(this).next();   
		
			parent.find('dd').slideUp(); 
			ukazka.not(':visible').slideDown();
		
		return false;
	});


// accordion plus mius 

	$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
		}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});


// SCROLOVANIE

        var nav = $('.nav'),
       navLinks = nav.find('a');

  navLinks.on('click', function(event) {
  	 $('html,body').animate({ scrollTop: $(this.hash).offset().top},1500);
  	event.preventDefault();

	  	});

     // back to top
    
    var up = $('<a>', {
					href: '#',
					class: 'up',
					html: '<i class="fa fa-chevron-circle-up"></i>'
		});

		up
			.hide()
			.appendTo('body')
			.on('click', function(){
				$('html, body').animate({scrollTop: 0 },1500);
				event.preventDefault();
		});

    var win = $(window)
		win.on('scroll', function(){
			if (win.scrollTop() >= 300 ) up.fadeIn();
			else up.hide();
		});


	 });