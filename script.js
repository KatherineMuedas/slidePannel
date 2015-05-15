$(document).ready(function(){
  $('.pull-me').click(function(){
    $('.panel').slideToggle('slow');    
  });
  $("#menu").accordion({collapsible: true, active: false});
});