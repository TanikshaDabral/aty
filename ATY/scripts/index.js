let isMenuOpen= false;

handelMenu=()=>{
  //getting mobile-menu by id using jquery
    var menu= $('#mobile-menu')

//making menu hide and show based on prev state
    if(isMenuOpen){
//setting display to none
        menu.css('display','none');
        isMenuOpen=false;
    }
    else{
         menu.css("display", "block");
        isMenuOpen=true;
    }

}

function toTop(){
    //scrolling to top of the page
   document.getElementById('top').scrollIntoView({behavior: 'smooth'});
}
//to handel caurosel testimonials

$(document).ready(function(){
  $("#carousel").slick({
		lazyLoad: "ondemand",
		dots: true,
		infinite: true,
		speed: 300, autoplay:true,
		slidesToShow: 1,
		centerMode: false,
	});
});

(function () {
	"use strict";

	var carousels = function () {
		$(".owl-carousel1").owlCarousel({
			loop: true,
			center: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				680: {
					items: 2,
					nav: false,
					loop: false,
				},
				1000: {
					items: 3,
					nav: true,
				},
			},
		});
	};

	(function ($) {
		carousels();
	})(jQuery);
})();