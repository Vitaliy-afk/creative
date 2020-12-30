jQuery( document ).ready(function() {
	initSlickSlider();
	initBurgerMenu();
	initAddResizeClass();
});


function initAddResizeClass() {
	var win = $(window),
			doc = $('html'),
			resizeClass = 'resize-active',
			flag, timer;
		var removeClassHandler = function() {
			flag = false;
			doc.removeClass(resizeClass);
		};
		var resizeHandler = function() {
			if(!flag) {
				flag = true;
				doc.addClass(resizeClass);
			}
			clearTimeout(timer);
			timer = setTimeout(removeClassHandler, 500);
		};
		win.on('resize orientationchange', resizeHandler);
}


function initBurgerMenu() {
	jQuery('.burger').on('click', function(e){
		e.preventDefault()
		jQuery(this).toggleClass('open');
		jQuery('body').toggleClass('burger-active');
	});
}



function initSlickSlider() {
	jQuery('.slider-block').slick({
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	// arrows: true,
	easing: 'ease',
	dots: false,
	slidesToShow: 3,
  	// variableWidth: true,
	responsive: [
		{
		  breakpoint: 2560,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			centerMode: true,
		  }
		},
		{
			breakpoint: 1025,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			}
		  },
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
})};

