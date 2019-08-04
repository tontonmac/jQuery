// $('#flashMessage').hide();
// $('#flashMessage').fadeIn(2000);
// $('flashMessage').delay(3000);
// $('#flashMessage').slideUp();
// $('#flashMessage').slideDown();

// const title = 'My first Blog Post';
// const content = 'This is my <strong>first</strong> post';

// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);

$('#flashMessage')
.hide()

$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

$('#flashMessage')
.fadeIn(1000)
.delay(2000)
.slideUp()
});