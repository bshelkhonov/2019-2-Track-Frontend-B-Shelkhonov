const template = document.createElement('template');
template.innerHTML = `
    <style>
      #head-container {
        background-color: #8E24AA;
        height: 10vh;
        display: flex;
        align-items: center;
        flex-direction: row;
        border: 1px solid #ccc;
        border-bottom: 1px;
        margin-bottom: 1px;
      }

      #back-button {
        margin-left: 2vw;
        width: 8vw;
        height: 8vh;
      }

      #back-button-img {
        width: 8vw;
        height: 8vh;
        fill: white;
      }
      
      .profile-picture {
        margin-left: 3vh;
      }
      
      .profile-picture-img {
        max-width: 8vh;
        max-height: 8vh;
        border-radius: 4vh;
      }
      
      .active {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-height: 10vh;
        max-width: 80vw;
        margin-left: 2vw;
        margin-right: 2vw;
      }
      
      .name {
        max-width: 80vw;
        font-size: 3vh;
        color: #fff;
      }
      
      .last-active {
        max-width: 80vw;
        font-size: 2vh;
        margin-top: 0.1vh;
        color: #fff;
      }

      #left-buttons {
        margin-left: 3vw;
        position: absolute;
        right: 1vw;
        display: flex;
      }

      #search-button {
        margin-left: 1vw;
        margin-right: 1vw;
        width: 8vw;
        height: 8vh;
      }

      #search-button-img {
        width: 8vw;
        height: 8vh;
        fill: white;
      }
      
      #menu-button {
        margin-left: 1vw;
        width: 8vw;
        height: 8vh;
      }
      
      #menu-button-img {
        width: 8vw;
        height: 8vh;
        fill: white;
      } 

    </style>
    <div id="head-container">
      <div id="back-button">
        <svg id="back-button-img" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><g stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10H1M1 10l8-8M1 10l8 8"/></g></svg>    
      </div>
      <div class="profile-picture">
        <img class="profile-picture-img" src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRDAJuMgySAFi_9sZpdku8tQ">
      </div>
      <div class="active">
        <div class="name">Nancy Sinatra</div>
        <div class="last-active">была в сети час назад</div>
      </div>
      <div id="left-buttons">
        <div id="search-button">
          <svg id="search-button-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612.1 612.1"><path d="M238 0a238 238 0 10136 433l176 177c4 3 9 3 12 0l48-48c3-3 3-9 0-12L433 374A238 238 0 00238 0zm0 420a182 182 0 110-364 182 182 0 010 364z"/></svg>
        </div>
        <div id="menu-button">
          <svg id="menu-button-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M 16 6 C 14.895431 6 14 6.8954305 14 8 C 14 9.1045695 14.895431 10 16 10 C 17.104569 10 18 9.1045695 18 8 C 18 6.8954305 17.104569 6 16 6 z M 16 14 C 14.895431 14 14 14.895431 14 16 C 14 17.104569 14.895431 18 16 18 C 17.104569 18 18 17.104569 18 16 C 18 14.895431 17.104569 14 16 14 z M 16 22 C 14.895431 22 14 22.895431 14 24 C 14 25.104569 14.895431 26 16 26 C 17.104569 26 18 25.104569 18 24 C 18 22.895431 17.104569 22 16 22 z"/>
          </svg>
        </div>
      </div>
    </div>
`;


class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('page-header', PageHeader);
