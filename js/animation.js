$(document).ready(function() {
	$('body').addClass('overflow-hidden');
	setTimeout(function(){
		$('body').removeClass('overflow-hidden');
	}, 2000);
});

$(document).ready(function(){$(document).on("click",".heart__favorite",function(e){$(this).hasClass("active-add")?($(this).removeClass("active-add"),$(this).addClass("active-del")):($(this).removeClass("active-del"),$(this).addClass("active-add"))})})
$(document).ready(function() {
	$(document).on('click', '.heart__favorite', function(event) {
		$(this).parent().addClass('heart__favorite-button-active');
		if (!$(this).parent().hasClass('heart__favorite-button-active-add')) {
			$(this).parent().removeClass('heart__favorite-button-active-del');
			$(this).parent().addClass('heart__favorite-button-active-add');
		} else {
			$(this).parent().removeClass('heart__favorite-button-active-add');
			$(this).parent().addClass('heart__favorite-button-active-del');
		}
	});
});
/* $(document).ready(function() {
	$(document).on('click', '.buttons-anim', function(event) {
		$(this).addClass('show');
	});
});
$(document).ready(function() {
	$(document).on('click', '.js-icon-scale-change', function(event) {
		$(this).addClass('js-icon-scale-change-active');
	});
	$(document).on('animationend', '.js-icon-scale-change', function(event) {
		$(this).removeClass('js-icon-scale-change-active');
	});
});

$('.jsButtonCounter').on('input paste keyup keydown change blur', '.spares-card__input', function () {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
		if (isNaN(parseInt($(this).val())) || parseInt($(this).val()) < 1) {
		$(this).val(1);
	}
	if (parseInt($(this).val()) > 9999) {
		$(this).val(9999);
	}
	reCalcCart();
});

$('.js-change-number').on('click', function() {
	var input = $(this).siblings('.js-number-inp');
	var value = parseInt(input.val()) || 0;
	var btn = $(this).closest('.jsButtonCounter');
	var spares_card_button_box = $('.buttons-anim');
	
	if ($(this).data('type')==='decrease') {
		if(value===1){
			spares_card_button_box.addClass('pointer-events-none');
			btn.addClass('button--show-cancel');
			
			setTimeout(function(){
				btn.removeClass('show');
				spares_card_button_box.removeClass('show');
				setTimeout(function(){
					btn.removeClass('button--show-cancel');
					spares_card_button_box.removeClass('pointer-events-none');
				}, 700);
			}, 700);
		}
		else{
			--value;
		}
	}
	else{
		if (value < 9999) {
			++value;
		}
	}
	input.val(value).change();
}); */

$(document).ready(function() {
	$(document).on('click', '.buttons-anim', function(event) {
		$(this).addClass('show');
	});
});
$(document).ready(function() {
	$(document).on('click', '.js-icon-scale-change', function(event) {
		$(this).addClass('js-icon-scale-change-active');
	});
	$(document).on('animationend', '.js-icon-scale-change', function(event) {
		$(this).removeClass('js-icon-scale-change-active');
	});
});

$('.jsButtonCounter').on('input paste keyup keydown change blur', '.buttons-anim__input', function () {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
		if (isNaN(parseInt($(this).val())) || parseInt($(this).val()) < 1) {
		$(this).val(1);
	}
	if (parseInt($(this).val()) > 9999) {
		$(this).val(9999);
	}
	reCalcCart();
});

$('.js-change-number').on('click', function() {
	var input = $(this).siblings('.js-number-inp');
	var value = parseInt(input.val()) || 0;
	var btn = $(this).parent();
	/* var btnsWrap = $(this).closest('.js-cart-number-buttons-wrap'); */
	var spares_card_button_box = $(this).closest('.buttons-anim');
	
	if ($(this).data('type')==='decrease') {
		if(value===1){
			spares_card_button_box.addClass('');
			btn.addClass('button-show-cancel');
			
			setTimeout(function(){
				btn.removeClass('show');
				spares_card_button_box.removeClass('show');
				setTimeout(function(){
					btn.removeClass('button-show-cancel');
					spares_card_button_box.removeClass('');
				}, 700);
			}, 700);
		}
		else{
			--value;
		}
	}
	else{
		if (value < 9999) {
			++value;
		}
	}
	input.val(value).change();
});


$(document).ready(function() {
	$(document).on('click', '.button-anim', function(event) {
		$(this).addClass('js-button-anim-active');
		setTimeout(function(){
			$('.button-anim').removeClass('js-button-anim-active');
		}, 2000);
	});
	$(document).on('click', '.load-more-button', function(event) {
		$('.content').addClass('js-content-back');
		setTimeout(function(){
			$('.content').removeClass('js-content-back');
		}, 2000);
	});
});

$(document).ready(function() {
	$(document).on('click', '.js-on-order__button', function(event) {
		if (!$('.on-order__input').val()=='') {
			$(this).addClass('js-on-order__button-active');
			$('body').removeClass('overflow-hidden');
			
			$('.state-form').addClass('open-slow');

			$('.js-state-form-back').addClass('_active');

			setTimeout(function(){
				$('.jsOnOrderModal').removeClass('open');
				$('.overlay').removeClass('open');
			}, 500);
			setTimeout(function(){
				$('.js-on-order__button').removeClass('js-on-order__button-active');
			}, 2000);
		}
	});

	$(document).on('click', '.js-state-form-back', function(event) {
		$(this).removeClass('_active');
		$('.state-form').removeClass('open');
		$('body').removeClass('overflow-hidden');
	});
});

$(document).ready(function() {
	$(document).on('click', '.btn-bell-anim', function(event) {
		$('.overlay').addClass('_active');
		$(this).addClass('js-btn-bell-anim-active');
		setTimeout(function(){
			$('.btn-bell-anim').removeClass('js-btn-bell-anim-active');
		}, 300);
	});
});

$(document).ready(function() {
	$(document).on('click', '.overlay', function(event) {
		$('.overlay').removeClass('open');
		$('.modal').removeClass('open');
		$('.dropdown').removeClass('open');
		$('header').removeClass('headerZI');
		$('body').removeClass('overflow-hidden');
		$(this).removeClass('_active');
	});
	$(document).on('click', '.jsCloseStateForm', function(event) {
		$('header').removeClass('headerZI');
		$('.overlay').removeClass('_active');
		$('.js-state-form-back').removeClass('_active');
		$('.state-form').removeClass('open-slow');

	});
});

$(document).ready(function() {
	$(document).on('click', 'body', function(event) {
		if ($('.dropdown').hasClass('open')) {
			$('header').addClass('headerZI');
		}
	});
});


