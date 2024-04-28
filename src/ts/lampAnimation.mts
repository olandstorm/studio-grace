import gsap from 'gsap';
const MIN_SEC_TIME = 5000;
const MAX_SEC_TIME = 20000;
const lampSVG = document.querySelector('#lampSVG');
const light = document.getElementById('lampRay');
let lampOn = true;
let blinkTimeout: number | undefined;

export default function lampAnimation() {
  if (lampSVG) {
    lampSVG.addEventListener('click', () => {
      toggleLamp();
    });
  }
}

function toggleLamp() {
  if (lampOn) {
    gsap.to(light, { opacity: 0, duration: 0.1 });
    clearTimeout(blinkTimeout);
    lampOn = false;
  } else {
    gsap.to(light, { opacity: 1, duration: 0.1 });
    blink();
    lampOn = true;
    blinkRandomly();
  }
}

function blinkRandomly() {
  const randomInterval =
    Math.floor(Math.random() * (MAX_SEC_TIME - MIN_SEC_TIME)) + MIN_SEC_TIME;

  blinkTimeout = setTimeout(() => {
    blink();
    blinkRandomly();
  }, randomInterval);
}

function blink() {
  const tl = gsap.timeline({ repeat: 2 });

  tl.to(light, { opacity: 0, duration: 0.05 }).to(light, {
    opacity: 1,
    duration: 0.2,
  });
}
