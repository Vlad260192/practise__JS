$(document).ready(function(){
   $('.button').on('click', function(){
      $('li:nth-child(odd)').slideToggle();
   });
});


