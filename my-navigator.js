import {LitElement, html} from 'lit';
import { navStyles } from './src/styles/navStyles';


export class Navigator extends LitElement {
  static get styles() {
    return [navStyles]
  }

  static get properties() {
    return {
      name : {
        type : String
      },
      info : {
        type : Array
      }
    };
  }

  constructor() {
    super();
    this.name = '';
    this.info = [];
  }

  render() {
    return html`
      <h2 class="title">Characters</h2>
      <div class="select-section">
        ${this.info.map(
          (element)=>
            html`
              <button class="section-button">
                ${element.name}
              </button>   
            `
        )}
        
      </div>

      <div class="pagination">
        <button class="button-page"><</button>
        <p class="text-page">page 1 of 5</p>
        <button class="button-page">></button>
      </div>
    `;
  }

}

window.customElements.define('my-navigator', Navigator);
