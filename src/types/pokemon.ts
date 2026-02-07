// Pokemon Types
export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: PokemonAttacks;
  evolutions: PokemonEvolution[];
}

export interface PokemonAttacks {
  fast: Attack[];
  special: Attack[];
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonEvolution {
  id: string;
  number: string;
  name: string;
  classification: string;
  types: string[];
  image: string;
}

export interface PokemonsQueryResult {
  pokemons: Pokemon[];
}

export interface PokemonQueryResult {
  pokemon: Pokemon | null;
}

export interface PokemonCacheItem {
  id: number;
  name: string; 
  imageUrl: string;
} 

export interface PokemonDropdownProps {
  onSelect: (pokemon: PokemonCacheItem) => void;
  placeholder?: string;
}
