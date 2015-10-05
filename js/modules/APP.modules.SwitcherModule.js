APP.modules.SwitcherModule = (function() {
	var $items = [ $(".switcher"), $(".switcher__pult_1"), $(".switcher__pult_2") ];

	function Switcher ( $el ) {
		this.$items = $el.children();
		this.$boxItems = $el.next().children();
		this.$items.on("click", { switcher: this }, onClick);
	}

	Switcher.prototype.switchTo = function ( index ) {
		this.$boxItems.hide();
		this.$boxItems.eq(index).fadeIn();
	}

	function onClick ( e ) {
		var index = $(this).index(),
			switcher = e.data.switcher;

		switcher.$items.removeClass("active");
		$(this).addClass("active");
		switcher.switchTo( index );
	}
	
	function init () {
		for ( var i = 0; i < $items.length; i++ ) {
			var switcher = new Switcher( $items[i] );
		}
	}

	// Public API
	return {
		init: init
	}

}());