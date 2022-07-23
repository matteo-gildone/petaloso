export class HeaderElement extends HTMLElement {
  static observedAttributes = ['site-name'];
  constructor () {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
      :host {
        display: block;
      }
      h1 {
        margin: 0 auto;
        max-width: var(--container-width, 1180px);
        padding: 0 var(--padding-lg, 1rem);
      }   
    </style>
    <h1>${this.getAttribute('site-name')}</h1>
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    console.log('Appended and connected to document')
  }

  disconnectedCallback() {
    console.log('Disconnected from document')
  }

  attributeChangedCallback(name, old, value) {
    console.log(`Element's attribute ${name} was ${old} and is now ${value}`);
    console.log(this.getAttribute('site-name'));
  }
}

customElements.define('ptl-header', HeaderElement);