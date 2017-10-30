$(document).ready(function(){





  /*

   navigation bar interactive
  
  */


  var currentAnchor = 1,
      anchorsList   = $('.navigate-to li'),
      isAnimating   = false;

  
  function nextAnchor(){
    currentAnchor++;
    if (currentAnchor > 5)
      currentAnchor = 1;
  }

  function prevAnchor(){
    currentAnchor--;
    if (currentAnchor < 1)
      currentAnchor = 5;
  }

  function changeMarker(current){
    $('.navigate-to li').removeClass('active');
    $('.navigate-to li:nth-child(' + currentAnchor + ')').addClass('active');
  }

  function changeScreen(current, next){
    var idFadeOut, idFadeIn;
    switch(current){
      case 1:
        idFadeOut = 'home';
        break;
      case 2:
        idFadeOut = 'about';
        break;
      case 3:
        idFadeOut = 'services';
        break;
      case 4:
        idFadeOut = 'portfolio';
        break;
      case 5:
        idFadeOut = 'contact';
        break;
    }
    switch(next){
      case 1:
        idFadeIn = 'home';
        break;
      case 2:
        idFadeIn = 'about';
        break;
      case 3:
        idFadeIn = 'services';
        break;
      case 4:
        idFadeIn = 'portfolio';
        break;
      case 5:
        idFadeIn = 'contact';
        break;
    }
    if (idFadeIn != idFadeOut){
      $('.sec#' + idFadeOut).fadeOut(350);
      $('.sec#' + idFadeIn).delay(350).fadeIn(350);
    }
  }


  /* change event */

  $('.navigate-to li').click(function(){
    var prev = currentAnchor,
        id   = $(this).attr('id'); 

    switch(id){
      case 'toHome':
        currentAnchor = 1;
        break;
      case 'toAbout':
        currentAnchor = 2;
        break;
      case 'toServices':
        currentAnchor = 3;
        break;
      case 'toPortfolio':
        currentAnchor = 4;
        break;
      case 'toContact':
        currentAnchor = 5;
        break;
    }
    
    changeMarker(currentAnchor);
    changeScreen(prev, currentAnchor);
  });

  $('button.link-contact').click(function(){
    currentAnchor = 5;
    changeMarker(currentAnchor);
    changeScreen(1, currentAnchor);
  });

  $('body').on('mousewheel', function(event){
    var prev = currentAnchor;
    // block default scrolling
    event.preventDefault();
    event.stopPropagation();

    // lock scrolling if it is on timeout
    if (isAnimating)
      return false;
    
    // animation timeout is 0.75s 
    setTimeout(function() {
      isAnimating = false;
    }, 750);

    // changing current anchor
    if (event.originalEvent.wheelDelta <= 0)
      nextAnchor();
    else
      prevAnchor();

    changeMarker(currentAnchor);
    changeScreen(prev, currentAnchor);

    // updating current nav menu state
    isAnimating = true;
    anchorsList = $('.navigate-to li');

  });

  // Анимация на полях ввода
  $('.field input').focusin(function(){
    $(this).siblings().addClass('active');
  });
  $('.field input').focusout(function(){
    if ($(this).val() == '')
      $(this).siblings().removeClass('active');
  });

  // Анимация на выборе типа и города
  $('.select').click(function(){
    if ($(this).hasClass('city')){
      $(this).toggleClass('active');
      $(this).siblings().removeClass('active');
    } else if ($(this).hasClass('type')){
      $(this).toggleClass('active');
      $(this).siblings().removeClass('active');
    }
  });

});