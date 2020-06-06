let rellax = new Rellax('.rellax');

const menu_wrap = document.querySelector('.menu-wrap');
const burger = document.getElementById('nav-icon1');
const body = document.querySelector('body');
const topButton = document.querySelector('#top-button');
const menuLinks = document.querySelectorAll('.menu-link');

function toggleMenu(){
  burger.classList.toggle("open");
  menu_wrap.classList.toggle("open");
  if (burger.classList.contains('open')){
      disableScroll();
      body.classList.toggle("open");
  }else{
      enableScroll();
      body.classList.toggle("open");
  }
}

burger.addEventListener('click', toggleMenu)
menuLinks.forEach(el => el.addEventListener('click', toggleMenu));

window.addEventListener('mousemove', e => {
  const b_box = topButton.getBoundingClientRect();
  //console.log(b_box)
  //console.log(e)
  const x = (b_box.left + b_box.right) / 2;
  const y = (b_box.top + b_box.bottom) / 2;
  const clientX = e.clientX;
  const clientY = e.clientY;
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;
  const maxDist = Math.sqrt(innerHeight**2 + innerWidth**2);
  const actDist = Math.sqrt((clientY - y)**2 + (clientX - x)**2);
  const scale = actDist / maxDist;
  //console.log(scale);
  topButton.style.transform = `scale(${1 + 0.15 * (1 - scale)})`;
});

// https://stackoverflow.com/a/4770179/9792594:
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}