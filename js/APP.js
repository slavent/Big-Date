;(function( window, $ ) {

	window.APP = {};
	APP.utils = {};
	APP.modules = {};

	APP.init = function () {
		APP.facade.setupModules();
	};

} ( this, jQuery ) );