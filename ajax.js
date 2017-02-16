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

  $('#step7').on('click', function () {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
      dataType: 'text'
    }).done(function(responseData){
        console.log('Ajax request sent!');
        $('.count').text(responseData);
    }).fail(function () {
        console.log('Request Fail! Everybody panic!');
        $('#step7').append('Request Failed! Errybody Panic!')
    }).always(function () {
        console.log('The request has finished');
        $('#step7').append('Request has Finished');
    });
  });

  $('#step8').on('click', function () {
    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/time',
      method:'GET',
      timezone: 'America/Mexico_City',
      dataType: 'text'
    }).done(function(responseData){
        console.log('Ajax request sent!');
        $('.time').text(responseData);
    }).fail(function () {
        console.log('Request Fail! Everybody panic!');
        $('.time').append('Request Failed! Errybody Panic!')
    }).always(function () {
        console.log('The request has finished');
        $('.time').append('Request has Finished');
    });
  });


});
