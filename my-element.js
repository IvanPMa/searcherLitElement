import {LitElement, html} from 'lit';
import { styles } from './src/styles/styles';
// import { apiRequest } from './apiRequest';

export class MyElement extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      word : {
        type : String
      },
      data : {
        type : Array
      }
    };
  }

  constructor() {
    super();
    this.word = '';
    this.data = [];
  }

  searchEvent(event){
    this.setWord(event.detail);
    console.log(event);
  }

  setWord(detail){
    this.word = detail;
    console.log(this.word);
    this.apiRequest(this.data).then(()=>console.log(this.data));
    
    // console.log(this.data);
  }
  apiRequest =  async ()=> {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const info = [];
      const response = await fetch (url);
      const result = await response.json();
  
      for (let i in result.results) {
        info.push(result.results[i])
        
      } 
      this.data = info;
      
  
    } catch (e){
      console.error(e)
    } finally{
      console.log('apiRequest Finished')
    }
    
  }
  

  
  render() {
    return html`
      <my-navigator 
        class="selector"
        .info="${this.data}"
      >
      </my-navigator>
      
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
