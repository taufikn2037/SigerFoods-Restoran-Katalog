class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright © 2022 - <span>Siger Foods</span></p>
        </footer>
        `;
  }
}

customElements.define('footer-content', FooterContent);
