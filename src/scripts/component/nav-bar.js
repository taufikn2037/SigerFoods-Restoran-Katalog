class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar">
            <a href="/" class="nav-branding">Siger Foods</a>
            <a href="#" class="drawer">☰</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#/home">Home</a></li>
                <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                <li class="nav-item"><a href="https://www.instagram.com/taufiks_n/" target="_blank">About Us</a></li>
            </ul>
        </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
