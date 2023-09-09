// Toggle class active
const navbarNav = document.querySelector
('.nvrr');
// ketika menu di clik

document.querySelector('#menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};

// clivck di luar slet bar untuk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});