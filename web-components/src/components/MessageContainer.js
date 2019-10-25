import { messagesStorageKey } from './Constants';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    #chat-log-container {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-height: 80vh;
    }
    
  </style>
  
  <div id='chat-log-container'>
  </div>
`;

function getStringTime(absoluteTime) {
  const time = new Date(absoluteTime);
  return `${time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`;
}


class MessageContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.chatLogContainer = this.shadowRoot.getElementById('chat-log-container');
    this.$mainContainer = document.getElementById('main-container');
  }

  loadMessages() {
    try {
      this.$mainContainer.appState.messages = JSON.parse(localStorage.getItem(messagesStorageKey));
      if (this.$mainContainer.appState.messages == null) {
        this.$mainContainer.appState.messages = [];
      }
      this.$mainContainer.appState.messages.forEach((item) => {
        if ('value' in item && 'time' in item) {
          this.addMessage(item.value, item.time);
        }
      });
    } catch (err) {
      this.$mainContainer.appState.messages = [];
    }
  }

  addMessage(msgText, absoluteTime) {
    const newMessage = document.createElement('message-element');
    newMessage.value = msgText;
    newMessage.stringTime = getStringTime(absoluteTime);
    newMessage.absoluteTime = absoluteTime;
    this.chatLogContainer.append(newMessage);
    this.chatLogContainer.scrollTo(0, this.chatLogContainer.scrollHeight);
    return newMessage;
  }
}

customElements.define('message-container', MessageContainer);
