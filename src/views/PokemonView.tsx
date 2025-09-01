import { Image } from '../components/Image';
import type { IPokemon } from '../types';

interface IPokemonViewProps {
  // alt: string;
  // characteristics: string[];
  // description: string;
  // src: string;
  // traits: string;

  pokemon: IPokemon;
}

export const PokemonView = ({
  // alt,
  // characteristics,
  // description,
  // src,
  // traits,
  pokemon,
}: IPokemonViewProps) => {
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
          {/* <li>Type: Fire/Flying 🔥🕊️</li>
          <li>Height: 1.7 m</li>
          <li>Weight: 90.5 kg</li>
          <li>Main ability: Blaze (powers up Fire-type moves in a pinch)</li>
          <li>Favorite move: Flamethrower</li>
          <li>Evolution: Final form of Charmander (Charmander → Charmeleon → Charizard)</li> */}
        </ul>
      </section>
    </main>
  );
};
