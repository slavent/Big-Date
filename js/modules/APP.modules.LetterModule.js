APP.modules.LetterModule = (function() {
	var $pluses = $(".section-2__pluses"), 
		$letter = $(".section-2__letter"),
		$convert = $(".section-2__convert_back"),

		letterText = "Дорогие молодожены!" + "$$" + "Команда нашего проекта Big-Date от души  поздравляет Вас с предстоящим светлым и важным событием жизни – вашей свадьбой! Мы хотим вам дать уникальную возможность создать персональный сайт для Вашего торжества." + 
		"$" + "Просто выберите на Ваш вкус в каталоге  дизайн и оформите сайт" +
		"$" + "своей информацией. К тому же спешим Вам сообщить, что" + 
		"$" + "наши специалисты смогут воплотить в жизнь сайт" +
		"$" + "по вашим индивидуальным пожеланиям." + 
		"$" + "Мы учтем Ваши предпочтения" + 
		"$" + "по дизайну сайта и по его" + 
		"$" + "функционалу.";

	function littleBitLater ( fn, time ) {
		setTimeout(function () {
			fn();
		}, time);
	}

	function animatePluses ( $items ) {
		var timer, i = 0, d = $.Deferred();

		timer = setInterval(function () {
			$items.eq(i).addClass("animated fadeInDown active");
			i++;

			if ( i === $items.length ) {
				clearInterval( timer );
				d.resolve();
			}
		}, 200);

		return d;
	}

	function animateElement ( $el ) {
		var d = $.Deferred(),
			fn = function () { d.resolve() };

		littleBitLater( fn, 1000 );
		$el.addClass("active");

		return d;
	}

	function typeLetter ( $el, text ) {
		var $letterBox, i = 0;

		$el.html("<div style='padding: 40px;'></div>");
		$letterBox = $el.find("div");

		function type () {
			typeSymbol( $letterBox, text[i] ).done(function () {
				i++;
				type();
			});
		}
		type();
	}

	function typeSymbol ( $el, symbol ) {
		var d = $.Deferred(),
			fn = function () { d.resolve() };

		if ( symbol === "$" ) {
			$el.append( "<br>" );
		} else {
			$el.append( symbol );
		}
		littleBitLater( fn, 20 );

		return d;
	}

	function startAnimation () {
		animatePluses( $pluses.children() ).done(function () {
			animateElement( $convert ).done(function () {
				animateElement( $letter ).done(function() {
					typeLetter( $letter, letterText );
				});
			});
		});
	}

	// Public API
	return {
		startAnimation: startAnimation
	}

}());