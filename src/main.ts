import './style.scss';
import menuIconAnimation from './ts/menuIconAnimation.mts';
import LocomotiveScroll from 'locomotive-scroll';
import closeCookieBar from './ts/closeCookieBar.mts';

const locomotiveScroll = new LocomotiveScroll();

closeCookieBar();
menuIconAnimation();
