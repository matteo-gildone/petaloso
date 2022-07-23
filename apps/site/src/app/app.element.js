import './app.element.css';
import '@petaloso/ui/header';

export class AppElement extends HTMLElement {
  static observedAttributes = [];
  connectedCallback() {
    this.innerHTML = `<ptl-header site-name="Petaloso"></ptl-header>`;
  }
}
customElements.define('petaloso-root', AppElement);
