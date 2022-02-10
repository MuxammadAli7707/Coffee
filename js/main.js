let elopenmodal = document.getElementById('menu');
let elClosemodal = document.getElementById('close');
let elopen = document.getElementById('navbar');

elopenmodal.addEventListener('click', function () {
  elopen.classList.add('show');
  elopenmodal.classList.add('hide');
  elClosemodal.classList.add('show-it');
});

elClosemodal.addEventListener('click', function () {
  elopenmodal.classList.remove('hide');
  elopen.classList.remove('show');
  elClosemodal.classList.remove('show-it');
});


let elanswer = document.getElementById('answerModal');
let elclosed = document.getElementById('closed');
let elbingo = document.getElementById('bingo');

elanswer.addEventListener('click', function () {
  elbingo.classList.add('welcome');
});

elclosed.addEventListener('click', function () {
  elbingo.classList.toggle('end');
});