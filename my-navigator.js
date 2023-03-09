import {LitElement, html} from 'lit';
import { navStyles } from './src/styles/navStyles';


export class Navigator extends LitElement {
  static get styles() {
    return [navStyles]
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    
  }

  render() {
    return html`
      <h2 class="title">Characters</h2>
      <div class="select-section">
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        <button class="section-button">Rick</button>
        
        
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
