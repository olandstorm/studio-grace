import './style.scss';
import menuIconAnimation from './ts/menuIconAnimation.mts';
import closeCookieBar from './ts/closeCookieBar.mts';
import lampAnimation from './ts/lampAnimation.mts';
import openMenu from './ts/openMenu.mts';
import closeMenu from './ts/closeMenu.mts';
import LocomotiveScroll from 'locomotive-scroll';
import { createFocusTrap, FocusTrap } from 'focus-trap';
import menuIcon from './ts/menuIcon.mts';

const scroll = new LocomotiveScroll();

closeCookieBar();
menuIconAnimation();
lampAnimation();
menuIcon();
if (scroll) {
  openMenu(scroll);
  closeMenu(scroll);
}

let focusTrap: FocusTrap | null = null;
const fullPageMenu = document.querySelector('#fullPageMenu');

if (fullPageMenu) {
  focusTrap = createFocusTrap('#fullPageMenu', {
    onActivate: () => fullPageMenu.classList.add('is-active'),
    onDeactivate: () => fullPageMenu.classList.remove('is-active'),
  });

  if (focusTrap) {
    const activateListener: EventListener = () => {
      focusTrap?.activate();
    };
    document
      .querySelector('#menuIconButton')
      ?.addEventListener('click', activateListener);
    document
      .querySelector('#menuButton')
      ?.addEventListener('click', activateListener);
    document
      .querySelector('#menuCloseButton')
      ?.addEventListener('click', () => {
        focusTrap?.deactivate();
      });
  }
}
