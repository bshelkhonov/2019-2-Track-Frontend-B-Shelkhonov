const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100vw;
            line-height: 45px;
            background-color: #fff;
        }

        .result {
            color: red;
            line-height: 45px;
        }

        input[type=submit] {
            visibility: collapse;
            bottom: 0;
        }
        
    </style>
    <form>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
`;


function isInteger(str) {
  return (str - 0) == str && str % 1 == 0;
}


class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$message = this._shadowRoot.querySelector('.result');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  connectedCallback() {
    const msgArray = [];
    for (const key in localStorage) {
      if (!isInteger(key)) {
        continue;
      }
      msgArray.push(parseInt(key));
    }
    msgArray.sort((a, b) => { return a - b; });
    const chatBox = document.getElementById('chat-log-container');
    msgArray.forEach((item, i, arr) => {
            newMessage = document.createElement("div");
            newMessage.className = "message";   
            newMessage.innerHTML = localStorage.getItem(item + "");
            chatBox.append(newMessage);
        });
    window.scrollTo(0, innerHeight);
  }

  _onSubmit(event) {
    event.preventDefault();
    const msgText = this.$input.value.trim();
    if (msgText === '/dev/clear') {
      localStorage.clear();
      const chatBox = document.getElementById('chat-log-container');
      const childNumber = chatBox.children.length;
      for (let i = 0; i < childNumber; ++i) {
        chatBox.removeChild(chatBox.children[0]);
      }
    } else if (msgText != '') {
      localStorage.setItem(localStorage.length, msgText);
      const newMessage = document.createElement('div');
      newMessage.className = 'message';
      newMessage.innerHTML = this.$input.value;
      const chatBox = document.getElementById('chat-log-container');
      chatBox.append(newMessage);
      chatBox.scrollTo(0, chatBox.scrollHeight);
    }
    // window.scrollTo(0, innerHeight);
    this.$input.reset();
  }

  _onKeyPress(event) {
    if (event.keyCode == 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
