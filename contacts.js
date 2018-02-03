let signInText = document.querySelectorAll('.header-links');
let form = document.querySelectorAll('.sign');

function toggleform() {
  if (form[1].classList.contains('hide')) {
    form[0].classList.add('hide');
    form[1].classList.remove('hide');
    signInText[0].classList.add('hide');
    signInText[1].classList.remove('hide');
  }
  else {
    form[0].classList.remove('hide');
    form[1].classList.add('hide');
    signInText[0].classList.remove('hide');
    signInText[1].classList.add('hide');
  }
}


for (var i = 0; i < signInText.length; i++) {
  signInText[i].addEventListener('click', toggleform);
}
