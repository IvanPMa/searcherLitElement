export const apiRequest =  async (data)=> {
  try {
    const url = "https://rickandmortyapi.com/api/character";
    const info = [];
    const response = await fetch (url);
    const result = await response.json();

    for (let i in result.results) {
      info.push(result.results[i])
      
    } 
    data = info;
    console.log(data);
    return data

  } catch (e){
    console.error(e)
  } finally{
    console.log('apiRequest Finished')
  }
  
}
