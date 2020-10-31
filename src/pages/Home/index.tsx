import React, { useState, useCallback, useEffect } from 'react';
import { Container, Footer, Header, Main, QueryField, Section } from './styles';

import api from '../../services/api';
import pokeball from '../../assets/pokeball.png';

interface IPokemon {
  abilities: any;
  base_experience: any;
  forms: any;
  game_indices: any;
  height: any;
  held_items: any;
  id: any;
  is_default: any;
  location_area_encounters: any;
  moves: any;
  name: any;
  order: any;
  species: any;
  sprites: any;
  stats: any;
  types: any;
  weight: any;
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
      const response: IPokemon = await api
        .get(`/pokemon/${pokemonQuery}`)
        .then((res) => {
          return res.data;
        });

      console.log(response);
      setPokemon(response);

      localStorage.setItem('@MyPokedex', JSON.stringify(pokemon));
    } catch (e) {
      console.log(`ocorreu um erro ao buscar om pokemon: ${e.message}`);
    }
  }, [pokemonQuery]);

  const handleInput = useCallback((event) => {
    setPokemonQuery(event.target.value);
  }, []);

  return (
    <Container>
      <Header>
        <h2>MY PODEDEX</h2>

        <QueryField>
          <input
            type="text"
            placeholder="Fill Pokemon name or id"
            value={pokemonQuery}
            onChange={handleInput}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleClick();
              }
            }}
          />

          <button type="button" onClick={handleClick}>
            Search
          </button>
        </QueryField>
      </Header>

      <Main>
        <Section>
          {pokemon === null ? (
            <>
              <p>poke name</p>
              <p>poke id</p>
              <img src={pokeball} alt={pokeball} />
            </>
          ) : (
              <div>
                <p>{pokemon?.name}</p>
                <p>{pokemon?.id}</p>
              </div>
            )}
        </Section>
      </Main>

      {/* <Footer>This is home - footer</Footer> */}
    </Container>
  );
};

export default Home;
