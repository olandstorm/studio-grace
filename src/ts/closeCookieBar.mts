import gsap from 'gsap';

export default function closeCookieBar() {
  const cookieBar = document.querySelector('#cookieBar');
  const cookieBtn = document.querySelector('#cookieBtn');

  if (cookieBar && cookieBtn) {
    cookieBtn.addEventListener('click', () => {
      gsap.to(cookieBar, {
        y: 90,
        opacity: 0,
        duration: 1,
        ease: 'sine.in',
        onComplete: () => cookieBar.remove(),
      });
    });
  }
}
