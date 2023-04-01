class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="heroContent">
                <h1 tabindex="0" class="title">Siger Foods</h1>
                <p tabindex="0" class="subtitle">Come find the best restaurants in Indonesia only on our website.</p>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-content', HeroContent);
