$(document).ready(function(){
  $('.slider').on('init', function(slick){
    setTimeout(function(){
      $('.preloader').fadeOut(3000);
    }, 2000);
  })
  .on('destroy', function(slick){
    $('.preloader').fadeOut(500);
    setTimeout(function(){
      $('.preloader').fadeOut(3000);
    }, 2000);
  })
  .slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });


  
  $('.arrNext').on('click', function() {
    $('.slider').slick('slickNext');
  });
  $('.arrPrev').on('click', function() {
    $('.slider').slick('slickPrev');
  });
});
