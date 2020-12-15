const panels = document.querySelectorAll('.panel');
// use query selector all if more than one element will come back
// returns an array-like node list

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
