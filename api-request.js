export const importData = (data)=> {
    const url = "https://rickandmortyapi.com/api/character";
    const info = [];
    fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => {
        for (let i in resultado.results) {
          info.push(resultado.results[i])
          
        } 
        data = info;
    })
    .catch ( error => console.log(error))
    .finally ( ()=> console.log('Ejecucion terminada'))
    // console.log(this.data)
}
