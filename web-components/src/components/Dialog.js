const template = document.createElement('template');
template.innerHTML = `
    <style>
      #dialog-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 13vh;
        width: 100vw;
        background-color: #fff;
      }

      #dialog-picture {
        margin-left: 3vh;
      }

      #dialog-picture-img {
        width: 10vh;
        height: 10vh;
        border-radius: 5vh;
      }

      #main-information {
        display: flex;
        display-direction: column;
      }

      #dialog-name {
        
      }

      #last-message {
        
      }

    </style>
    <div id="dialog-box">
      <div id='dialog'>
        <div id='dialog-picture'>
          <img id="dialog-picture-img" src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRDAJuMgySAFi_9sZpdku8tQ">
        </div>
        <div id='main-information'>
          <div id='dialog-name'>Nancy Sinatra</div>
          <div id='last-message'>Hello</div>
        </div>
      </div>
    </div> 
  
`;


class DialogBox extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


}

customElements.define('dialog-box', DialogBox);
