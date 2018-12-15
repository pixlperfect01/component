customElements.define('component', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>testing, attention please</p>";
  }
  ...
});
