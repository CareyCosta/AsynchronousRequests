$(document).ready(function () {
  $('.button').on('click', function() {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      dataType: 'text'
    }).done(function(responseData) {

    });
  });
  $('.button2').on('click', function() {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/ping',
      method:'GET',
      dataType: 'text'
    }).done(function(responseData){

    });
  });
});
