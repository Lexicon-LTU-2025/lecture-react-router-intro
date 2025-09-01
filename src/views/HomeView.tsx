import { Image } from '../components/Image';
import { Link } from '../components/Link';
import type { TPokemonSelection } from '../types';

interface IHomeViewProps {
  updateSelectedPokemon: (selectedPokemon: TPokemonSelection) => void;
}

export const HomeView = ({ updateSelectedPokemon }: IHomeViewProps) => {
  return (
    <main>
      <Image
        alt="Group of Pokémon with Ash"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saymedia-content.com%2F.image%2Ft_share%2FMTczOTQwMjUyMTkxMjM3OTg1%2Fbest-looking-shiny-pokemon-generation-1.jpg&f=1&nofb=1&ipt=d8c8f3d6f3a55023286a2535de6997f4b3cf682ae3cd4d48ed53374416772d15"
      />

      <h2>Welcome to the World of Pokémon!</h2>
      <p>
        Pokémon are creatures that inhabit every corner of the world. They come in all shapes and
        sizes, each with unique abilities, powers, and personalities. From the electric charm of
        <strong> Pikachu</strong>, to the fiery strength of <strong>Charizard</strong>, to the
        graceful power of <strong>Dragonite</strong> — there's a Pokémon for everyone.
      </p>
      <p>
        Trainers around the globe catch, train, and battle with Pokémon in their journey to become
        Pokémon Masters. Pokémon live in forests, oceans, caves, and cities, and they form strong
        bonds with their trainers.
      </p>
      <p>Explore some of the most popular Pokémon below:</p>
      <div>
        <ul>
          <li>
            <Link onClick={() => updateSelectedPokemon('pikachu')}>Learn more about Pikachu</Link>
          </li>
          <li>
            <Link onClick={() => updateSelectedPokemon('charizard')}>
              Discover Charizard's powers
            </Link>
          </li>
          <li>
            <Link onClick={() => updateSelectedPokemon('dragonite')}>
              Meet the mighty Dragonite
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};
