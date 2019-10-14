const template = document.createElement('template');
template.innerHTML = `
  <style>
  .message-box {
    background-color: #f3e5f5;
    margin: auto 1vw 0.5vh 20vw;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
  }
  
  .message-text {
    font-size: 3vh;
    text-align: left;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .time-stamp {
    font-size: 1.5vh;
    text-align: right;
  }

  .read-status {
    height: 5vh;
    width: 5vh;
    fill: white;
  }

  </style>
  <div class='message-box'>
    <div class='message-text'></div>
    <div class='time-stamp'></div>
  </div>

`;

class Message extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$msgTextElement = this.shadowRoot.querySelector('.message-text');
    this.$msgTimeStamp = this.shadowRoot.querySelector('.time-stamp');
    this.$absoluteTime = 0;
  }


  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  set value(msgText) {
    this.$msgTextElement.innerText = msgText;
  }

  set stringTime(strTime) {
    this.$msgTimeStamp.innerText = strTime;
  }

  set absoluteTime(absTime) {
    this.$absoluteTime = absTime;
  }

  get value() {
    return this.$msgTextElement.innerText;
  }

  get absoluteTime() {
    return this.$absoluteTime;
  }
}
customElements.define('message-element', Message);
