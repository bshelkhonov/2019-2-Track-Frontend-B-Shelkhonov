const template = document.createElement('template');
template.innerHTML = `
    <style>
      #dialogs-list {
        display: flex;
        flex-direction: column;
        max-height: 90vh;
        overflox-y: auto;
      }        

    </style>

    <div id="dialogs-list">
    </div> 
  
`;


class DialogsContainer extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.dialogsList = this.shadowRoot.getElementById('dialogs-list');
  }
}

customElements.define('dialogs-container', DialogsContainer);
