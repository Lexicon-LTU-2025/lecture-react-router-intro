import { useState, type ReactElement, type ReactNode } from 'react';
import { Header } from './Header';
import { HomeView } from '../views/HomeView';
import { PokemonView } from '../views/PokemonView';
import { pokemons } from '../pokemons';
import type { TPokemonSelection } from '../types';

export function App(): ReactElement {
  const { charizard, dragonite, pikachu } = pokemons;
  const [selectedPokemon, setSelectedPokemon] = useState<TPokemonSelection | null>(null);

  const getPokemonView = (): ReactNode => {
    switch (selectedPokemon) {
      case 'charizard':
        return <PokemonView pokemon={charizard} />;
      case 'dragonite':
        return <PokemonView pokemon={dragonite} />;
      case 'pikachu':
        return <PokemonView pokemon={pikachu} />;
      default:
        return null;
    }
  };

  const updateSelectedPokemon = (selectedPokemon: TPokemonSelection) => {
    setSelectedPokemon(selectedPokemon);
  };

  return (
    <>
      <Header updateSelectedPokemon={updateSelectedPokemon} />
      {selectedPokemon === null && <HomeView updateSelectedPokemon={updateSelectedPokemon} />}
      {getPokemonView()}
    </>
  );
}
