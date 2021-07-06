var  elModalButton = document.querySelector('.hamburder-button');
var  elModalOpen = document.querySelector('.site-modal');



elModalButton.addEventListener('click', function() {
  elModalOpen.classList.toggle('site-modal--open');
});
