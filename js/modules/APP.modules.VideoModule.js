APP.modules.VideoModule = (function () {
	var $el = document.getElementById("mainVideo"),
		$preloader = $(".preloader");

	function play () {
		$el.play();
		setTimeout(function () {
			$preloader.fadeOut();
		}, 1000);
	}

	function pause () {
		$el.pause();
	}

	// Public API
	return {
		play: play,
		pause: pause
	}

}());