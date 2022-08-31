/*
	Full Motion by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');


		$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);

			[...document.querySelectorAll(".control")].forEach(button => {
				button.addEventListener("click", function() {
					document.querySelector(".active-btn").classList.remove("active-btn");
					this.classList.add("active-btn");
					document.querySelector(".active").classList.remove("active");
					document.getElementById(button.dataset.id).classList.add("active");
				})
			});
			document.querySelector(".theme-btn").addEventListener("click", () => {
				document.body.classList.toggle("light-mode");
			})
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Banner.
			var $banner = $('#banner');

			if ($banner.length > 0) {

				// IE fix.
					if (skel.vars.IEVersion < 12) {

						$window.on('resize', function() {

							var wh = $window.height() * 0.60,
								bh = $banner.height();

							$banner.css('height', 'auto');

							window.setTimeout(function() {

								if (bh < wh)
									$banner.css('height', wh + 'px');

							}, 0);

						});

						$window.on('load', function() {
							$window.triggerHandler('resize');
						});

					}

				// Video check.
					var video = $banner.data('video');

					if (video)
						$window.on('load.banner', function() {

							// Disable banner load event (so it doesn't fire again).
								$window.off('load.banner');

							// Append video if supported.
								if (!skel.vars.mobile
								&&	!skel.breakpoint('large').active
								&&	skel.vars.IEVersion > 9)
									$banner.append('<video autoplay loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');

						});

				// More button.
					$banner.find('.more')
						.addClass('scrolly');

			}

		// Scrolly.
			$('.scrolly').scrolly();

		// Poptrox.
			$window.on('load', function() {

				var $thumbs = $('.thumbnails');

				if ($thumbs.length > 0)
					$thumbs.poptrox({
						onPopupClose: function() { $body.removeClass('is-covered'); },
						onPopupOpen: function() { $body.addClass('is-covered'); },
						baseZIndex: 10001,
						useBodyOverflow: false,
						overlayColor: '#222226',
						overlayOpacity: 0.75,
						popupLoaderText: '',
						fadeSpeed: 500,
						usePopupDefaultStyling: false,
						windowMargin: (skel.breakpoint('small').active ? 5 : 50)
					});

			});

		// Initial scroll.
			$window.on('load', function() {
				$window.trigger('scroll');
			});

		$( "#showmore, #showmore2" ).on('touchend  click', function(event) {
			// $(this).find('.fa-eye,.fa-eye-slash').toggleClass('fa-eye').toggleClass('fa-eye-slash');
			event.stopPropagation();
			event.preventDefault();
			myModule.showMore();

		});

	});


})(jQuery);


const myModule = (() => {

	const showMore = function () {
		let div = querySelect("#plus");
        let btn = querySelect("#showmore");
        let btn2 = querySelect("#showmore2");
        let btnArrow = querySelect("#more2");


		if (div.classList.contains("d-none")) {
			div.className = "d-block";
			btn.innerHTML  = "Hide";
			btn.className = "button style2 mb-4 fit";
			btnArrow.className = "more2";
			btn2.className = "text-center scroll-down d-none";

		} else {
			div.className = "d-none";
			btn.className = "button style mb-4 fit";
			btn.innerHTML  = "Show More";
			btnArrow.className = "more";
			btn2.className = "text-center scroll-down d-block";
		}
	}
//----------------------------
	/** for more readable syntax
	 * @param container - get an #id
	 * @returns {*} - returns selector with the particular id sent */
	const querySelect = function (container) {
		return document.querySelector(container);
	}
	//---------------------
	/** set attribute to a DOM object
	 * @param container - get an #id
	 * @param qualName - get a qualified name (class, href, etc)
	 * @param val - get the value we want to insert */
	const setAttr = function (container, qualName, val) {
		querySelect(container).setAttribute(qualName, val);
	}
	//--------------------------------------
	/** add listeners to the save buttons of the DOM inserted photos (every card has a such button) */
	const addListeners = function () {
		let buttons = document.getElementsByClassName("btn btn-info ml-2 mr-2");
		// for (let btn of buttons)
		//     btn.addEventListener('click', saveImageToList);
	}
	//--------------------------------
	/** creates a DOM element
	 * @param node - a tag
	 * @returns {*} - returns a created element with the particular tag sent */
	const createNode = function (node) {
		return document.createElement(node);
	}
	//-----------------
	/** set the child and append him to the parent sent
	 * @param parent - get the parent node
	 * @param child - get the child node
	 * @param nameClass - the class name we want to insert to the child
	 * @param inner - the innerHTML we want to insert to the child */
	const appendNode = function (parent, child, nameClass, inner) {
		child.className = nameClass;
		child.innerHTML = inner;
		parent.appendChild(child);
	}
	//---------------------
	/** reset errors to none errors */
	const resetErrors = function () {
		document.querySelectorAll(".is-invalid").forEach((e) => e.classList.remove("is-invalid"));
		document.querySelectorAll(".errormessage").forEach((e) => e.innerHTML = "");
	}
	//-----------------------------

	return {
		showMore: showMore,
		querySelect: querySelect,
	}
})();



