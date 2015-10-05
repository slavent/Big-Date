APP.modules.SchemeModule = (function(){
	var $box, $path,
		$el = $(".scheme"),
		time = 5000,

		data = [
			{ url: "i/ic_notepade.png", text: "Вы заполняте заявку" },
			{ url: "i/ic_cloud.png", text: "Мы связываемся с Вами" },
			{ url: "i/ic_skrepka.png", text: "Вы присыаете нам фотографии и текст для заполнения Вашего свадебного сайта" },
			{ url: "i/ic_money.png", text: "Вы оплачиваете проделанную работу" },
			{ url: "i/ic_cogwheel.png", text: "Мы редакируем Ваши фотографии, размещаем текст, регистрируем имя вашего сайта, оформляем его. Готовим макеты свадебных пригласительных" },
			{ url: "i/ic_ok.png", text: "Через 2-7 дней Вы получаете макеты пригласительных, доступ к Вашему сайту, хвастаетесь близким" }
		];

	function makeHtmlSkeleton () {
		var d = $.Deferred();

		$el.append("<div class='scheme__path'></div>");
		$el.append("<div class='scheme__box'></div>");
		$path = $el.find(".scheme__path");
		$box = $el.find(".scheme__box");

		for ( var i = 0; i < data.length; i++ ) {
			var margin = ($el.width() / data.length) + 25;
				html = "<div class='scheme__box_item' style='left:" + margin * i + "px;'><img src=" + data[i].url +  "><div><p>" + (i+1) + "</p>" + data[i].text + "</div></div>";
			$box.append(html);

			if ( i === data.length - 1 ) {
				d.resolve();
			}
		}

		return d;
	}

	function animateText ( i ) {
		var $item = $box.children().eq(i).find("div");

		if ( i % 2 ) {
			$item.addClass("active active_odd animated fadeInUp");
		} else {
			$item.addClass("active active_even animated fadeInDown");
		}
	}

	function animateIcon () {
		var timer, i = 0, interval = (time / data.length);

		function showIcon () {
			$box.children().eq(i).find("img").addClass("active animated flip");
			animateText( i );

			if ( i === data.length - 1 ) {
				clearInterval( timer );
			} else {
				i++;
			}
		}

		timer = setInterval(showIcon, interval);
	}

	function animatePath () {
		$path.animate({ "width": "100%" }, time);
	}

	function startAnimation () {
		makeHtmlSkeleton().done(function () {
			animatePath();
			animateIcon();
		});
	}
	
	// Public API
	return {
		startAnimation: startAnimation
	}

}());