const getAllPokemons = async (pageIndex) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pageIndex}`);  
}

export default getAllPokemons;