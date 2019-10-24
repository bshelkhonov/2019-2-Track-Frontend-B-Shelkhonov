const template = document.createElement('template');
template.innerHTML = `
  <style>
  .container {
    display: flex;
    margin-right: 1vw;
    margin-bottom: 0.8vh;
  }

  .message-box {
    background-color: #f3e5f5;
    padding: 20px;
    box-shadow: -5px 5px 6px 0px rgba(46, 50, 50, 0.75);
    max-width: 70vw;
  }

  .triangle {
    align-self: flex-end;
    border-style: solid;
    border-width: 1vh 0 0 1vh;
    border-color: transparent transparent transparent #f3e5f5;
  }
  
  .message-text {
    max-width: 60vw;
    font-size: 3vh;
    text-align: left;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .message-status {
    display: flex;
    justify-content: flex-end;
    right: 1px;
  }

  .time-stamp {
    font-size: 1.5vh;
    text-align: right;
    margin-right: 1vw;
  }

  .read-status {
    height: 1.5vh;
    width: 1.5vh;
    fill: #8e24aa;
  }
  </style>
  <div class='container'> 
    <div class='message-box'>
      <div class='message-text'></div>
      <div class='message-status'>
        <div class='time-stamp'></div>
        <div class='read-status'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 594.149 594.149"><path d="M448.8 161.925l-35.7-35.7-160.65 160.65 35.7 35.7 160.65-160.65zm107.099-35.7l-267.75 270.3-107.1-107.1-35.7 35.7 142.8 142.8 306-306-38.25-35.7zM0 325.125l142.8 142.8 35.7-35.7-142.8-142.8-35.7 35.7z"/></svg>
        </div>
      </div>
    </div>
    <div class='triangle'></div>
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
