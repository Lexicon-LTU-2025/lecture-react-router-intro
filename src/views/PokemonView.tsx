import { Navigate, useParams } from 'react-router';
import { Image } from '../components/Image';
import type { IPokemon } from '../types';
import { pokemons } from '../pokemons';
import type { ReactElement } from 'react';

export const PokemonView = (): ReactElement => {
  const { pokemonName } = useParams();

  console.log('Inside pokemon view');

  if (pokemonName === undefined) {
    return <Navigate replace to="/" />;
  }

  const pokemon: IPokemon | undefined = pokemons[pokemonName];

  if (pokemon === undefined) {
    return <Navigate replace to="/" />;
  }

  const { alt, characteristics, description, src, traits } = pokemon;

  return (
    <main className="pokemon-view">
      <Image alt={alt} src={src} />
      <section>
        <h2>General Information</h2>
        <p>{description}</p>
        <p>{traits}</p>
      </section>
      <section>
        <h2>Special Characteristics</h2>
        <ul>
          {characteristics.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};
