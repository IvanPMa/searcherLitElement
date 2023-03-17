export const apiRequest =  async (word)=> {
  try {
    
    const url = `https://rickandmortyapi.com/api/character?name=${word}`;
    const response = await fetch (url);
    const result = await response.json();

    const info = result.results.map(element =>({
      image: element.image,
      name: element.name,
      typeCharacter: element.name,
      id: element.id,
      specie : element.species,
      status : element.satus,
      gender : element.gender,
      origin : element.origin.name,
      location : element.location.name
    }))

    const totalPages = result.info.pages;
    console.log(info)
    console.log(totalPages)
    return [info, totalPages];

  } catch (e){
    console.error(e)
  } finally{
    console.log('apiRequest Finished')
  }
  
}