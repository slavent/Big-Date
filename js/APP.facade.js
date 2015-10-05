APP.facade = {

	setupModules: function() {
		APP.facade.bindEvents();
		APP.modules.NavModule.init();
		APP.modules.SwitcherModule.init();
		APP.modules.OrderModule.init();
		APP.modules.ReviewsModule.init();
	},

	bindEvents: function() {
		APP.utils.eventNode.one("navigationComplete", APP.modules.RouterModule.init);
		APP.utils.eventNode.on("playVideo", APP.modules.VideoModule.play);
		APP.utils.eventNode.on("pauseVideo", APP.modules.VideoModule.pause);
		APP.utils.eventNode.one("startLetterAnimation", APP.modules.LetterModule.startAnimation);
		APP.utils.eventNode.one("startSchemeAnimation", APP.modules.SchemeModule.startAnimation);
	}

};