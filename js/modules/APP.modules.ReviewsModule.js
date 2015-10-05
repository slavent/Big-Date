APP.modules.ReviewsModule = (function() {
	var itemsHtml,
		className = ".swiper-container",
		$el = $(className),

		swiperConfig = {
			loop: true,
			speed: 800,
			autoplay: 5000,
			effect: "cube"
		},

		data = [
			{ pic: "i/review1.jpg", date: "12.05.2014", title: "Инна & Егор", text: "Спасибо команде BD за теплое отношение и внимание к малейшим деталям. Мы и наши гости были просто в неописуемом восторге от сайта! Вы дали нам очень интересную возможность сделать нашу свадьбу мечты стильной и современной. Спасибо команде BD за теплое отношение и внимание к малейшим деталям. Мы и наши гости были просто в неописуемом восторге от сайта! Вы дали нам очень интересную возможность сделать нашу свадьбу мечты стильной и современной." },
			{ pic: "i/review2.jpg", date: "12.05.2014", title: "Алла & Кирилл", text: "Спасибо команде BD за теплое отношение и внимание к малейшим деталям. Мы и наши гости были просто в неописуемом восторге от сайта! Вы дали нам очень интересную возможность сделать нашу свадьбу мечты стильной и современной. Спасибо команде BD за теплое отношение и внимание к малейшим деталям. Мы и наши гости были просто в неописуемом восторге от сайта! Вы дали нам очень интересную возможность сделать нашу свадьбу мечты стильной и современной." },
		];

	function setupSlider () {
		$(function () {
			var mySwiper = new Swiper (className, swiperConfig);
		});       
	}

	function makeSliderSkeleton () {
		for( var i = 0; i < data.length; i++) {
			$el.append("<div class=swiper-slide>" +
							"<div class=reviews__item-photo><div><img src=" + data[i].pic + "></div></div>" +
							"<div class=reviews__item-info>" +
								"<div class=reviews__item-title>" + data[i].title + "</div>" +
								"<div class=reviews__item-date>" + data[i].date + "</div>" +
								"<div class=reviews__item-text>" + data[i].text + "</div>" +
							"</div>" +
						"</div>");
		}

		items_html = $el.html();
		$el.html("<div class='swiper-wrapper'></div>");
		$el.find("div").html(items_html);

		setupSlider();
	}

	function init () {
		makeSliderSkeleton();
	}

	// Public API
	return {
		init: init
	}

}());