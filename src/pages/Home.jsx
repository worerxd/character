import React, { useEffect, useState } from 'react';
import getAllPokemons from '../actions/pokemon'
import './Home.css'

const Home = () => {
  const [pokemon, setPokemon] = useState();
  const [pageIndex, setPageIndex] = useState(1);


  const handleClickNext = () => {
    setPageIndex(pageIndex + 1 )
  }

  const handleClickPrev = () => {
    setPageIndex(pageIndex -1 )
  }

  useEffect(() => {
    const getAllPokemonsByPage = async () => {
      const response = await getAllPokemons(pageIndex);
      const data = await response.json();
      setPokemon(data)
    }

    getAllPokemonsByPage()
  }, [pageIndex])
  return (
    <div>        
      <h1 className='page-title'>POKEMON</h1>
      {pokemon ? (<div className="container">        
        <div className="card">
          <div className="card-image">
            <img src={pokemon.sprites.front_default} alt="" className='image' />
          </div>
          <div className="card-body">
            <div className="card-title">{pokemon.name.toUpperCase()}</div>
            <p className='stats-title'>Stats: </p>
            <div className="stats">
              
              {pokemon.stats.map((stat) => (<p>{stat.stat.name}: <span className='stats-value'>{stat.base_stat} </span></p>))}
            </div>
          </div>
          <div className='buttons'>
          <button className='prev' type='button' onClick={handleClickPrev}>Prev</button>
          <button className='next' type='button' onClick={handleClickNext}>Next</button>
          </div>
        </div>
        
      </div>    ) : ''}
      
    </div>

    
  );
};

export default Home;