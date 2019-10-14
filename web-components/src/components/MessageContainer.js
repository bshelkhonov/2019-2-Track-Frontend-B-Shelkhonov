// import { storageKey } from "./MessageForm";

const template = document.createElement('template');
template.innerHTML = `
  <style>
    #chat-log-container {
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      max-height: 80vh;
    }
    
  </style>
  
  <div id='chat-log-container'>
  </div>
`;

const separator = 'Nm9qii';
const splitter = 'R2P6kf';
const storageKey = 'chatLog';


function getStringTime(absoluteTime) {
  const time = new Date(absoluteTime);
  return `${time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`;
}


class MessageContainer extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.chatLogContainer = this.shadowRoot.getElementById('chat-log-container');
  }

  connectedCallback() {
    const stringArray = localStorage.getItem(storageKey);
    if (stringArray === null) {
      return;
    }

    stringArray.split(splitter).forEach((element) => {
      const msg = element.split(separator);
      this.addMessage(msg[1], msg[0]);
    });
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
