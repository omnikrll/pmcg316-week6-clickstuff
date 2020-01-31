alert('Hello world');
// console.log('hello world');

function swapColorClasses(event) {
  event.preventDefault();

  console.log(event.target);

  var demoModule = document.querySelector('.demo-module');

  if (demoModule.classList.contains('blue')) {
    demoModule.classList.remove('blue');
    demoModule.classList.add('green');
  } else if (demoModule.classList.contains('green')) {
    demoModule.classList.remove('green');
    demoModule.classList.add('purple');
  } else if (demoModule.classList.contains('purple')) {
    demoModule.classList.remove('purple');
    demoModule.classList.add('blue');
  } else {
    demoModule.classList.add('blue');
  }
}

// function toggleDifferentDivs(event) {
//   event.preventDefault();
//
//   demoModule.addClass('hidden');
//
//   console.log($(event.target).attr('href'));
//
//   $($(event.target).attr('href')).removeClass('hidden');
// }
//
// $('#firstClick').click(toggleDifferentDivs);
// $('#secondClick').click(toggleDifferentDivs);


// $('#clickMe').click(swapColorClasses);
// $('#orMe').click(swapColorClasses);

document.getElementById('clickMe').addEventListener('click', swapColorClasses);
document.getElementById('orMe').addEventListener('click', swapColorClasses);
