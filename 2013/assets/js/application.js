!function ($) {
	var $window = $(window);
	$(function(){ 
		// side bar

//		$('.img-sidenav').affix({
		$('.widgets-sidebar').affix({
			offset: {
				top: 109
			}
		});

		
		var liftoffTime = new Date(2013, 8, 2, 0, 0, 0, 0); 
		$("#timer-widget").countdown({until: liftoffTime, format: 'd', description: "to submit."});
	})
	
}(window.jQuery)
