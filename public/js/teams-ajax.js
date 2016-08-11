$(document).ready(function() {
 $('.delete-link').on('click', function(e){
  e.preventDefault();

  var teamLink = $(this);
  var teamUrl = teamLink.attr('href');

   $.ajax({
    method: 'delete',
    url: teamUrl
    }).done(function(data){
      alert('sad to see you go!');
      window.location = '/teams';
    });
 });

  $('.put-form').on('submit', function(e){
    e.preventDefault();

     var teamElement = $(this);
     var teamUrl = teamElement.attr('action');
     var teamData = teamElement.serialize();

     $.ajax({
      method: 'put',
      url: teamUrl,
      data: teamData
     }).done(function(data){
      alert('team edit');
      window.location = '/teams';
     });
  });
});
