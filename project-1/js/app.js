/* JavaScript way */
// const box = document.querySelector('.box');
// box.style.display = 'none';

/* jQuery way */
// jQuery('.box').hide(); //same as below
// $('.box').hide();
// $('.box').show();

/* JavaScript way */
// box.addEventListener('click', function() {
//   alert('You clicked me!');
// });

/* jQuery way */
$('.box').click(function() {
  alert('You clicked me!');
});