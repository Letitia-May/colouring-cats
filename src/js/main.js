$(document).ready(function() {
	

	// Fade navbar in/out on scroll down/up
	$(window).scroll(function() {
		if($(window).scrollTop() >=480) {
			$('.navbar').fadeIn(1000);
		} else {
			$('.navbar').fadeOut(1000);
		}
	});


	// Toggle navbar (slide up and down on click)
	$('.menuIcon').click(function() {
		$('.menuList').slideToggle('slow', function() {
			//Animation complete.
		});
	});

	// Photo popup box
	$('.bandPhotos').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {enabled:true},
	  closeOnBgClick: true, 
	  enableEscapeKey: true, 

	  // other options
	});

	// Lyrics popup box
	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	// Smooth scroll
	smoothScroll.init();

});