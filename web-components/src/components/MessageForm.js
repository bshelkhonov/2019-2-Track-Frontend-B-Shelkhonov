import { getCurrentTime, updateAppState, updateMessageStorage } from './Functions';


const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100vw;
            height: 10vh;
            line-height: 5px;
            background-color: #fff;
        }

        input[type=submit] {
            visibility: collapse;
            bottom: 0;
        }
        
    </style>
    <form>
        <form-input name="message-text" placeholder="Сообщение"></form-input>
    </form>
`;


const separator = 'Nm9qii';
const splitter = 'R2P6kf';
const storageKey = 'chatLog';


function addToLocalStorage(message) {
  let stringArray = localStorage.getItem(storageKey);
  const time = message.absoluteTime;
  const msgText = message.value;

  if (stringArray === null) {
    localStorage.setItem(storageKey, `${time}${separator}${msgText}`);
  } else {
    stringArray += `${splitter}${time}${separator}${msgText}`;
    localStorage.setItem(storageKey, stringArray);
  }
}


class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$mainContainer = document.getElementById('main-container');
    this.$messageContainer = this.$mainContainer.shadowRoot.getElementById('message-container');
    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }


  onSubmit(event) {
    event.preventDefault();
    const msgText = this.$input.value.trim();

    if (msgText !== '') {
      // const newMessage = this.$messageContainer.addMessage(msgText, getCurrentTime());
      // updateAppState(this.$mainContainer.$appState, newMessage);
      // updateMessageStorage(this.$mainContainer.$appState);
      addToLocalStorage(this.$messageContainer.addMessage(msgText, getCurrentTime()));
    }

    this.$input.reset();
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
