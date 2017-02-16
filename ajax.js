$(document).ready(function () {

  $('.button-root').on('click', function() {

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method:'GET',
      dataType: 'text'
    }).done(function(responseData) {
        console.log('Ajax request sent!');
        $('#step12').append('Ajax request sent!');
    }).fail(function () {
      console.log('Request Fail! Everybody panic!');
      $('#step12').append('Request Failed! Errybody Panic!');
    }).always(function () {
      console.log('The request has finished');
      $('#step12').append('Request has Finished');
    });
});

  $('.button-ping').on('click', function() {

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/pong',
      method:'GET',
      dataType: 'text'
    }).done(function(responseData){
        console.log('Ajax request sent!');
        $('#step3456').append('Ajax request sent!');
    }).fail(function () {
      console.log('Request Fail! Everybody panic!');
      $('#step3456').append('Request Failed! Errybody Panic!')
    }).always(function () {
      console.log('The request has finished');
      $('#step3456').append('Request has Finished');
    });
  });

});
