$(document).ready(function() {    

 	// EFECTO HEADER TITLE
	$("#header-box").animate({
	  top: '-=40px',
	  opacity: 'toggle',
	}, 1100);


	$("#menu").animate({
		opacity: 'toggle',
	}, 1100);

	// EFECTO SLIDER MENU
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	    return false;
	  }
	}
	});

});