import type { ReactElement } from 'react';
import { Link } from './Link';
import type { TPokemonSelection } from '../types';

interface IHeaderProps {
  updateSelectedPokemon: (selectedPokemon: TPokemonSelection) => void;
}

export const Header = ({ updateSelectedPokemon }: IHeaderProps): ReactElement => {
  return (
    <header>
      <h1>Pokemon World</h1>
      <nav className="links">
        <Link onClick={() => updateSelectedPokemon(null)}>Home</Link>
        <Link onClick={() => updateSelectedPokemon('pikachu')}>Pikachu</Link>
        <Link onClick={() => updateSelectedPokemon('charizard')}>Charizard</Link>
        <Link onClick={() => updateSelectedPokemon('dragonite')}>Dragonite</Link>
      </nav>
    </header>
  );
};
