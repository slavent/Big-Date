APP.modules.RouterModule = (function() {
	// todo: delete selector $("nav a")
	var $el =  $("nav a"), 
		anchors = ["home", "pluses", "services", "rates", "scheme", "order", "reviews"];

	function init () {
		$("#fullpage").fullpage({
			anchors: anchors,
			css3: true,
			keyboardScrolling: true,
	        animateAnchor: true,
	        recordHistory: true,
	        afterLoad: function(anchorLink, index) {
	        	$("nav a").removeClass("active");
	        	$("nav a").eq(index - 2).addClass("active");

	        	if ( anchorLink === "home" ) {
	        		APP.utils.eventNode.trigger("playVideo");
	        	} else {
	        		APP.utils.eventNode.trigger("pauseVideo");
	        	}

	        	if ( anchorLink === "scheme" ) {
	        		APP.utils.eventNode.trigger("startSchemeAnimation");
	        	}

	        	if ( anchorLink === "pluses" ) {
	        		APP.utils.eventNode.trigger("startLetterAnimation");
	        	}
	        }
		});
	}

	// Public API
	return {
		init: init
	};
	
}());