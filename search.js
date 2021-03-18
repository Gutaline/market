const selectElement = document.querySelector("[data-select]");
let screenWindow = window.innerWidth;


selectElement.addEventListener("click", function(event) {


if (event.target.hasAttribute("data-item")) {

	const item = event.target.getAttribute("data-item");
    event.target.closest("[data-select]").querySelector("[data-title]").textContent = item;

    event.target.closest("[data-select]").querySelector(".select__dropdown").classList.toggle("hidden");
	} 
	else {
		this.querySelector(".select__dropdown").classList.toggle("hidden");
	}

});
	$('.slider__inner').slick({
			arrows:false,
     		dots:true
 
	});

 
	$('.slider__inner-2').slick({
		slidesToShow:3,
		arrows:false,

		responsive: [
			{
			  breakpoint: 861,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: false
			  }
			},

			{
				breakpoint: 530,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  dots: false
				}
			  },
		]
	});


	 $('.hamburger').on('click', function(){
	 
		
		$('.menu_nav').slideToggle();
	 });
	 
	 
	


	
