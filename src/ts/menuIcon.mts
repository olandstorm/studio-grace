import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function menuIcon() {
  const menuButton = document.querySelector('#menuButton');
  ScrollTrigger.create({
    start: '600px top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      gsap.to(menuButton, {
        duration: 0.2,
        display: self.isActive ? 'block' : 'none',
      });
    },
  });
}
