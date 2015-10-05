APP.modules.NavModule = (function() {
	var html, $el = $("nav ul");

		data = [
			{ hash: "pluses", name: "Наши преимущества" },
			{ hash: "services", name: "Услуги" },
			{ hash: "rates", name: "Тарифы" },
			{ hash: "scheme", name: "Схема работы" },
			{ hash: "order", name: "Заказать" },
			{ hash: "reviews", name: "Отзывы" }
		];

	function init ()  {	
		for( var i = 0; i < data.length; i++ ) {
			html = "<li><a href='#" + data[i].hash + "'>" + data[i].name + "</a></li>";
			$el.append(html);

			if ( i === data.length - 1 ) {
				APP.utils.eventNode.trigger("navigationComplete");
			}
		}
	}

	// Public API
	return {
		init: init
	}

}());