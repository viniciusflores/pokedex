import React, { useState, useCallback, useEffect } from 'react';
import { Container, Footer, Header, Main, Section } from './styles';

import api from '../../services/api';

const Home: React.FC = () => {
  const [pokemonQuery, setPokemonQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem('@MyPokedex');
    if (storage !== null && pokemon === null) {
      const poke = JSON.parse(storage);
      setPokemon(poke);
    }
  }, [pokemon]);

  const handleClick = useCallback(async () => {
    if (pokemonQuery.length < 1) {
      return;
    }

    try {
      const response = await api.get('/pokemon/charmander').then((res) => {
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
        <h2> This is home - header</h2>
      </Header>

      <Main>
        <Section>
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
        </Section>
        <p>here is pokemon data</p>
      </Main>

      <Footer>This is home - footer</Footer>
    </Container>
  );
};

export default Home;
