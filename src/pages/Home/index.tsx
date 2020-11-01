import React, { useState, useCallback, useEffect } from 'react';
import { UrlObject } from 'url';
import { Container, Footer, Header, Main, QueryField, Section } from './styles';

import api from '../../services/api';
import pokeball from '../../assets/pokeball.png';

interface IPokemon {
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  image: string;
  weight: number;
}

const Home: React.FC = () => {
  const [pokemonQuery, setPokemonQuery] = useState('');
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    const storage = localStorage.getItem('@MyPokedex');
    if (storage !== null && pokemon === null) {
      const poke = JSON.parse(storage);
      setPokemon(poke);
    }
  }, [pokemon]);

  const handleClick = useCallback(async () => {
    if (pokemonQuery.length < 1) {
      setPokemon(null);
      return;
    }

    try {
      const response = await api
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`)
        .then((res) => {
          return res.data;
        });

      console.log(response);

      const pokeResponse: IPokemon = {
        height: response.height,
        id: response.id,
        is_default: response.is_default,
        name: response.name,
        image: response.sprites.other.dream_world.front_default,
        weight: response.name,
      };

      setPokemon(pokeResponse);

      localStorage.setItem('@MyPokedex', JSON.stringify(pokemon));
    } catch (e) {
      setPokemon(null);
      localStorage.removeItem('@MyPokedex');
      console.log(`ocorreu um erro ao buscar om pokemon: ${e.message}`);
    }
  }, [pokemon, pokemonQuery]);

  const handleInput = useCallback((event) => {
    setPokemonQuery(event.target.value);
  }, []);

  return (
    <Container>
      <Header>
        <h2>MY PODEDEX</h2>

        <QueryField>
          <input
            type='text'
            placeholder='Fill Pokemon name or id'
            value={pokemonQuery}
            onChange={handleInput}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleClick();
              }
            }}
          />

          <button type='button' onClick={handleClick}>
            Search Search
          </button>
        </QueryField>
      </Header>

      <Main>
        <Section>
          {pokemon === null ? (
            <>
              <p>poke name</p>
              <p>poke id</p>
              <img src={pokeball} alt='pokeball' />
            </>
          ) : (
            <div>
              <p>{pokemon?.name}</p>
              <p>{pokemon?.id}</p>
              <img src={pokemon?.image} alt='' />
            </div>
          )}
        </Section>
        <Footer>
          <div />
        </Footer>
      </Main>
    </Container>
  );
};

export default Home;
