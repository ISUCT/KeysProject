$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

jQuery(document).ready(function() {
jQuery('.post').addClass("hidden").viewportChecker({
classToAdd: 'visible animated fadeIn',
offset: 100
});
});