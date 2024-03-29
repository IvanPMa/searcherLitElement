export const apiRequest =  async (word)=> {
  try {
    
    const url = `https://rickandmortyapi.com/api/character?name=${word}`;
    const response = await fetch (url);
    const result = await response.json();

    const info = result.results.map(element =>({
      image: element.image,
      name: element.name,
      type: element.type,
      id: element.id,
      species : element.species,
      status : element.status,
      gender : element.gender,
      origin : element.origin.name,
      location : element.location.name
    }))

    const totalPages = result.info.pages;
    console.log(result)
    return [info, totalPages];

  } catch (e){
    console.error(e)
  } finally{
    console.log('apiRequest Finished')
  }
  
}

export const reloadInfo = async (word,page) =>{
  try{
    const url = `https://rickandmortyapi.com/api/character?name=${word}&page=${page}`;
    const response = await fetch (url);
    const result = await response.json();

    const info = result.results.map(element =>({
      image: element.image,
      name: element.name,
      type: element.type,
      id: element.id,
      specie : element.species,
      status : element.status,
      gender : element.gender,
      origin : element.origin.name,
      location : element.location.name
    }))
    console.log(result);
    return info;

  } catch (e){
    console.error(e)
  } finally{
    console.log('apiRequest Finished')
  }
}