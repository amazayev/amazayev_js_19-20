
$(function(){
  $('#slides').slides({
    preload: true,
    preloadImage: 'img/loading.gif',
    play: 5000,
    pause: 2500,
    hoverPause: true
  });
});

$(document).ready( function() {
  var $element = $('.images');

  var $img1 = $('.img1');
  var $overlay1 = $('.overlay1');
  var $img2 = $('.img2');
  var $overlay2 = $('.overlay2');
  var $img3 = $('.img3');
  var $overlay3 = $('.overlay3');
  var $img4 = $('.img4');
  var $overlay4 = $('.overlay4');

  var $links1 = $('#accordion .accordion_panel_1');
  var $submenu1 = $('#accordion .accordion_1');
  var $links2 = $('#accordion .accordion_panel_2');
  var $submenu2 = $('#accordion .accordion_2');
  var $links3 = $('#accordion .accordion_panel_3');
  var $submenu3 = $('#accordion .accordion_3');
  var $links4 = $('#accordion .accordion_panel_4');
  var $submenu4 = $('#accordion .accordion_4');

  $links1.click(function() {
     $(this).css('backgroundImage', 'url(img/accordion_active.png)');
     $links2.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu2.slideUp(1000, function() {
    });
     $links3.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu3.slideUp(1000, function() {
    });
     $links4.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu4.slideUp(1000, function() {
    });
     $submenu1.slideToggle(1500, function() {
  });
  });

  $links2.click(function() {
     $(this).css('backgroundImage', 'url(img/accordion_active.png)');
     $links1.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu1.slideUp(1000, function() {
    });
     $links3.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu3.slideUp(1000, function() {
    });
     $links4.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu4.slideUp(1000, function() {
    });
     $submenu2.slideToggle(1500, function() {
  });
  });

  $links3.click(function() {
     $(this).css('backgroundImage', 'url(img/accordion_active.png)');
     $links1.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu1.slideUp(1000, function() {
    });
     $links2.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu2.slideUp(1000, function() {
    });
     $links4.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu4.slideUp(1000, function() {
    });
     $submenu3.slideToggle(1500, function() {
  });
  });

  $links4.click(function() {
     $(this).css('backgroundImage', 'url(img/accordion_active.png)');
     $links1.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu1.slideUp(1000, function() {
    });
     $links2.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu2.slideUp(1000, function() {
    });
     $links3.css('backgroundImage', 'url(img/accordion_nonactive.png)');
     $submenu3.slideUp(1000, function() {
    });
     $submenu4.slideToggle(1500, function() {
  });
  });

/////////////////////////////////////////////////////////////////////////////////

  $img1.click(function() {
      $overlay1.animate({
      opacity: 0.5
    });
    $img1.mouseleave(function() {
        $overlay1.animate({
        opacity: 0
     });

     $img2.click(function() {
         $overlay2.animate({
         opacity: 0.5
       });
       $img2.mouseleave(function() {
            console.log(2);
           $overlay2.animate({
           opacity: 0
        });

        $img3.click(function() {
            $overlay3.animate({
            opacity: 0.5
          });
          $img3.mouseleave(function() {
               console.log(2);
              $overlay3.animate({
              opacity: 0
           });

           $img4.click(function() {
               $overlay4.animate({
               opacity: 0.5
             });
             $img4.mouseleave(function() {
                  console.log(2);
                 $overlay4.animate({
                 opacity: 0
              });

});
});
});
});
});
});
});
});
});
