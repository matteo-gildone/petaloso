export class HeaderElement extends HTMLElement {
  static observedAttributes = ['site-name'];
  connectedCallback() {
    console.log('Appended and connected to document')
  }

  disconnectedCallback() {
    console.log('Disconnected from document')
  }

  attributeChangedCallback(name, old, value) {
    console.log(`Element's attribute ${name} was ${old} and is now ${value}`);
    console.log(this.getAttribute('site-name'));
    this.innerHTML = `<h1>Welcome From ${this.getAttribute('site-name')}!</h1>`;
  }
}

customElements.define('ptl-header', HeaderElement);