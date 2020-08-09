$(document).ready(function () {

  // Preloader
  var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
		$preloader.delay(350).fadeOut('slow');
		
	$('.popup').magnificPopup();

  //Menu opener hamburger
  $('.menu-btn').click(function () {
    $('.unfold').toggleClass('d-none').css('order', '1');
    $('.menu').toggleClass('menu-opened');
  });

  $('.menu-opened li').click(function () {
    $('.unfold').toggleClass('d-none').css('order', '1');
    $('.menu').toggleClass('menu-opened');
	})

	//Ajax form
	$("form").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("form").trigger("reset");
    });
    return false;
  });


	//Slider
  $('.opinions__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
	});
	
		//Parallax
	if ($(window).width() > 960) { 
		// Кешируем объект окна
		$window = $(window);
		                
		$('[data-type="background"]').each(function(){
			var $bgobj = $(this); // Назначаем объект
										
			$(window).scroll(function() {
										
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				
				// Размещаем все вместе в конечной точке
				var coords = '50% '+ yPos + 'px';

				// Смещаем фон
				$bgobj.css({ backgroundPosition: coords });
			}); 
		});	
	}
});
