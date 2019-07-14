'use strict';
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		touchDrag: true,
		nav: true,

		responsive: {
			320: {
				items: 1,
				margin: 0
			},
			481: {
				items: 2,
				margin: 15
			},
			769: {
				items: 3
			}
		}
	})
});
