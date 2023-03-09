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
    this.apiRequest().then(()=>console.log(this.data));
    
    // console.log(this.data);
  }
  apiRequest =  async ()=> {
    try {
      const info = [];
      for (let i = 1 ; i <= 42 ; i++){
        const url = "https://rickandmortyapi.com/api/character?page="+i;
        const response = await fetch (url);
        const result = await response.json();
    
        for (let i in result.results) {
          info.push(result.results[i])
          
        } 

        let infoFilter = info.filter( element =>  {
          return (element.name.toLowerCase().includes(this.word.toLowerCase()) == true)})
        this.data = infoFilter;
      }
        
  
    } catch (e){
      console.error(e)
    } finally{
      console.log('apiRequest Finished')
    }
    
  }
  
  captureButton(event){
    console.log(event)
  }
  
  render() {
    return html`
      <my-navigator 
        class="selector"
        .info="${this.data}"
        @click-button =${this.captureButton}
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
