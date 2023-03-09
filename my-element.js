import {LitElement, html} from 'lit';
import { styles } from './src/styles/styles';


export class MyElement extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
    
  }

  searchEvent(event){
    console.log(event)
  }
  render() {
    return html`
      <my-navigator class="selector"></my-navigator>
      <div class="section">
          <my-search class="search"
            @input-search=${this.searchEvent}
          ></my-search>
          <my-card class= "card"></my-card>
      </div>
      
    `;
  }

}

window.customElements.define('my-element', MyElement);
