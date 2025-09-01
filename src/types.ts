export interface IPokemon {
  alt: string;
  characteristics: string[];
  description: string;
  src: string;
  traits: string;
}

export interface IPokemonKinds {
  charizard: IPokemon;
  dragonite: IPokemon;
  pikachu: IPokemon;
}

export type TPokemonSelection = 'charizard' | 'dragonite' | 'pikachu' | null;
