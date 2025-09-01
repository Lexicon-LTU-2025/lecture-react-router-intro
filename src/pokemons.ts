import type { IPokemonKinds } from './types';

export const pokemons: IPokemonKinds = {
  charizard: {
    alt: 'Charizard official artwork',
    characteristics: [
      'Type: Fire/Flying 🔥🕊️',
      'Height: 1.7 m',
      'Weight: 90.5 kg',
      'Main ability: Blaze (powers up Fire-type moves in a pinch)',
      'Favorite move: Flamethrower',
      'Evolution: Final form of Charmander (Charmander → Charmeleon → Charizard)',
    ],
    description:
      'Charizard is a Fire/Flying-type Pokémon known for its dragon-like appearance, powerful wings, and fiery breath. It evolves from Charmeleon and is the final evolution of Charmander.',
    traits:
      'Charizard soars through the sky in search of powerful opponents. It breathes fire so hotit can melt anything. However, it never turns its fiery breath on any opponent weaker than itself.',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  },
  dragonite: {
    alt: 'Dragonite official artwork',
    characteristics: [
      'Type: Fire/Flying 🔥🕊️',
      'Height: 1.7 m',
      'Weight: 90.5 kg',
      'Main ability: Blaze (powers up Fire-type moves in a pinch)',
      'Favorite move: Flamethrower',
      'Evolution: Final form of Charmander (Charmander → Charmeleon → Charizard)',
    ],
    description:
      'Dragonite is a Dragon/Flying-type Pokémon known for its friendly nature and incredible strength. Despite its bulky appearance, it is capable of flying faster than the speed of sound',
    traits:
      'It is said that Dragonite can circle the globe in just 16 hours. It is highly intelligent and shows signs of human-like compassion, often helping lost or shipwrecked people.',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
  },
  pikachu: {
    alt: 'Pikachu official artwork',
    characteristics: [
      'Type: Electric ⚡',
      'Height: 0.4 m',
      'Weight: 6.0 kg',
      'Main ability: Static (may paralyze on contact)',
      'Favorite move: Thunderbolt',
      'Evolution: Evolves into Raichu with a Thunder Stone',
    ],
    description:
      "Pikachu is an Electric-type Pokémon known for its yellow fur, pointy ears with black tips, and its signature move: Thunderbolt It's the most iconic Pokémon in the franchise and the loyal partner of Ash Ketchum in the animated series.",
    traits:
      'Pikachu stores electricity in its cheeks and releases it in bursts. It can generateelectric shocks when excited or threatened.',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
};
