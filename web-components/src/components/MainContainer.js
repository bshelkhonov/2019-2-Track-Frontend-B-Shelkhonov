const template = document.createElement('template');
template.innerHTML = `
    <style>
      #chat-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 90vh;
        color: #000;
        background-color: #f5f5f5;
      }

      #chat-list-container {
        display: none;
        flex-direction: column;
        height: 90vh;
        color: #000;
        background-color: #f5f5f5;
      }
              
    </style>
    <div id="chat-container">
      <message-container id="message-container">
      </message-container>
      <message-form id="message-form"></message-form>
    </div> 
      
    <dialogs-container id='dialogs-container'>
    </dialogs-container>
`;


class MainContainer extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$chatContainer = this.shadowRoot.getElementById('chat-container');
    this.$dialogsContainer = this.shadowRoot.getElementById('dialogs-container');
    this.currentStatus = 0;
    this.$appState = { messages: [], dialogs: [] };
  }


  changeDisplay() {
    if (this.currentStatus === 0) {
      this.$chatContainer.style.display = 'none';
      this.$dialogsContainer.style.display = 'block';
    } else {
      this.$chatContainer.style.display = 'flex';
      this.$dialogsContainer.style.display = 'none';
    }
    this.currentStatus = 1 - this.currentStatus;
  }
}

customElements.define('main-container', MainContainer);
