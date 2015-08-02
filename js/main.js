$(document).ready(function () {
  $('#add').click(function () {
    $('#list').append('<li>' + $('#item').val() + '</li>');
    $('#item').val('');
  });
  $(document).keyup(function () {
    if (event.which === 13) {
      $('#add').trigger('click');
    }
  });
});