import type { ReactElement } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { pokemons } from '../pokemons';

export const Header = (): ReactElement => {
  // We use Object.keys to convert the object to an array and give us the keys
  const pokemonArray = Object.keys(pokemons);
  const navigate = useNavigate();

  // Programatic navigation. Use Link or NavLink whenever you can, but this one is there as a last resort.
  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <header>
      {/* <Link to="/">
        <h1>Pokemon World</h1>
      </Link> */}

      <h1 onClick={handleOnClick}>Pokemon World</h1>

      <nav className="links">
        {pokemonArray.map((link) => (
          <NavLink className="link" to={`/${link}`}>
            {link}
          </NavLink>
        ))}

        {/* <NavLink className="link" to="/pikachu">
          Pikachu
        </NavLink>
        <NavLink className="link" to="/charizard">
          Charizard
        </NavLink>
        <NavLink className="link" to="/dragonite">
          Dragonite
        </NavLink> */}
      </nav>
    </header>
  );
};
