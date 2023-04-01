const DrawerInitiator = {
  init({ drawer, navMenu, content }) {
    drawer.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer, navMenu);
    });

    content.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, navMenu);
    }));
  },

  _toggleDrawer(event, drawer, navMenu) {
    event.stopPropagation();
    drawer.classList.toggle('active');
    navMenu.classList.toggle('active');
  },

  _closeDrawer(event, drawer, navMenu) {
    event.stopPropagation();
    drawer.classList.remove('active');
    navMenu.classList.remove('active');
  },
};

export default DrawerInitiator;
