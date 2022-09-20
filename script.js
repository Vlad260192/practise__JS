$(document).ready(function(){
   $('.button').on('click', function(){
      $('body').toggleClass('change');
   });

   $('.test-btn').on('click', function(){
      $('.main__info').each(function(){
         $(this).children(':nth-child(1)').css('color', 'red');
         $(this).children(':nth-child(2)').css('color', 'green');
         $(this).children(':nth-child(3)').css('color', 'yellow');
      });
   });

   let w = $('.example').width();
   let h = $('.example').height();

   alert(h);

});


