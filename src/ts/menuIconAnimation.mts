import { gsap } from 'gsap';

export default function menuIconAnimation() {
  const menuIcon = document.querySelector('#menuIconButton');

  if (menuIcon) {
    menuIcon.addEventListener('mouseenter', () => {
      gsap.to(menuIcon, {
        rotation: -15,
        transformOrigin: 'top center',
        duration: 0.8,
        ease: 'elastic.out',
      });
    });

    menuIcon.addEventListener('mouseleave', () => {
      gsap.to(menuIcon, {
        rotation: 0,
        transformOrigin: 'top center',
        duration: 0.8,
        ease: 'elastic.out',
      });
    });
  }
}
