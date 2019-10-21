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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.chatLogContainer = this.shadowRoot.getElementById('chat-log-container');
    this.$mainContainer = document.getElementById('main-container');
  }

  connectedCallback() {
   /* try {
      this.$mainContainer.$appState.messages = JSON.parse(localStorage.getItem(messagesStorageKey));
      this.$mainContainer.$appState.messages.forEach((item) => {
        console.log(item);
        this.addMessage(item.value, item.time);
      });
    } catch(err) {
      console.log('localstorage error!');
    }*/
    const stringArray = localStorage.getItem(storageKey);
    if (stringArray === null) {
      return;
    }

    stringArray.split(splitter).forEach((element) => {
      const msg = element.split(separator);
      this.addMessage(msg[1], parseInt(msg[0], 10));
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
