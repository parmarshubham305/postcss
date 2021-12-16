
jQuery(document).ready(function(){
   $('.top-banner-slider').slick({
	  dots: true,
	  arrows:false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});


	$('.client-testimonialSlider').slick({
		dots: false,
		arrow:true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1025,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
		});

		$('.LatestNews-Slider').slick({
			dots: false,
			arrow:true,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 1025,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				},
				{
					breakpoint: 757,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2
					}
				  },
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
			});
});