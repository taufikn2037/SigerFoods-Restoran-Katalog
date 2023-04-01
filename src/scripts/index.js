/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/nav-bar.js';
import './component/hero-content.js';
import './component/footer-content.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  drawer: document.querySelector('.drawer'),
  navMenu: document.querySelector('.nav-menu'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
