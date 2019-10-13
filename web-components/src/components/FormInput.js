const template = document.createElement('template');
template.innerHTML = `
    <style>
        .input-container {
          display: flex;
        }

        input {
          outline: none;
          width: calc(100vw - 15vh);
          height: 15vh;
          font-size: 40pt;
          background-color: #fff;
        }

        #attach-button {
          background-color: #fff;
          width: 15vh;
          height: 15vh;
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
    </style>
   <div class='input-container'>
      <input type="text">
      <svg id="attach-button" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M478.649 149.063c-1.699-22.079-11.825-43.429-28.514-60.119-34.869-34.868-88.004-38.466-118.447-8.023L127.091 285.52c-9.39 9.389-14.561 21.873-14.561 35.152s5.171 25.764 14.561 35.154c9.39 9.389 21.874 14.561 35.153 14.561s25.764-5.172 35.153-14.561l204.598-204.599c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-204.597 204.6c-5.612 5.611-13.074 8.703-21.011 8.703s-15.398-3.092-21.011-8.703c-5.612-5.613-8.703-13.074-8.703-21.012s3.091-15.398 8.703-21.01L345.831 95.063c22.645-22.646 63.091-19.046 90.162 8.023 13.315 13.316 21.383 30.188 22.715 47.511 1.288 16.743-3.93 31.891-14.691 42.652l-72.211 72.212-132.387 132.387c-20.614 20.613-48.022 31.967-77.175 31.967s-56.561-11.354-77.175-31.967-31.967-48.021-31.967-77.176c0-29.152 11.353-56.561 31.967-77.175L245.538 83.028c3.905-3.905 3.905-10.237 0-14.143-3.905-3.905-10.238-3.905-14.142 0l-160.47 160.47c-24.391 24.391-37.824 56.822-37.824 91.316 0 34.496 13.433 66.926 37.825 91.318 24.392 24.391 56.822 37.824 91.317 37.824s66.925-13.434 91.317-37.824l132.387-132.387 72.211-72.212c14.956-14.954 22.234-35.669 20.49-58.327z" fill="#3e3e3f"/></svg>
    </div>

`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  reset() {
    this.$input.value = '';
  }
}
customElements.define('form-input', FormInput);
