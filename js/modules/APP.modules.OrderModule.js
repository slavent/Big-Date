APP.modules.OrderModule = (function() {
	var data, 
		$error = $(".form__error"),
		$success = $(".form__success"),
		$el = $(".form form"),
		$btn = $(".form__btn_order"),

		errorClass = "active animated shake",
		successClass = "active animated fadeInDown",

		translates = {
			NAME: "ИМЯ",
			EMAIL: "E-MAIL",
			PHONE: "ТЕЛЕФОН",
			RATE: "ТАРИФ",
			THEME: "ТЕМА ОФОРМЛЕНИЯ",
			COMMENT: "КОММЕНТАРИЙ"
		};

	function clearForm () {
		$el.find("input[type=text]").val("");
		$el.find("textarea").val("");
	}

	function saySuccess ( successText ) {
		clearForm();
		$error.removeClass(errorClass);
		$success.html(successText).addClass(successClass);

		setTimeout(function () {
			$success.removeClass(successClass);
		}, 3000);
	}

	function sayError ( errorText ) {
		$error.removeClass(errorClass);
		$error.html(errorText).addClass(errorClass);
	}

	function validate ( data ) {
		var error = false,
			error_text = ": данное поле должно быть заполнено!";

		for( var i = 0; i < data.length; i++ ) {
			if( data[i].value === "" ) {
				error = true;
				error_text = translates[ data[i].name.toUpperCase() ] + error_text;
				break;
			}
		}

		return { data: data, error: error, error_text: error_text }
	}

	function getData () {
		return validate( $el.serializeArray() );
	}

	function sendData ( data ) {
		$.ajax({
			type: "POST",
			url: "http://big-date.ru/server/sendOrder.php",
			data: data,
			success: function ( msg ) {
				saySuccess( msg );
			}
		});	
	}

	function onClick ( e ) {
		e.preventDefault();
		data = getData();

		if( data.error == true ) {
			sayError( data.error_text );
		} else {
			sendData( data.data );
		}
	}

	function init () {
		$btn.on("click", onClick);
	}

	// Public API
	return {
		init: init
	}

}());