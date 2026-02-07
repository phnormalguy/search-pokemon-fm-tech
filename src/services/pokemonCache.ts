import { PokemonCacheItem } from '../types/pokemon';

class PokemonCacheService {
  private cache: PokemonCacheItem[] = [];
  private isLoaded = false;

  async loadAllPokemon(): Promise<void> {
    if (this.isLoaded) return;

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
      const data = await response.json();
      
      this.cache = data.results.map((pokemon: any, index: number) => ({
        id: index + 1, 
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }));
      
      this.isLoaded = true;
    } catch (error) {
      console.error('Failed to load Pokemon cache:', error);
    }
  }

  searchPokemon(query: string): PokemonCacheItem[] {
    if (!query) return [];
    
    console.log('Searching for:', query, 'Cache size:', this.cache.length);
    
    const lowerQuery = query.toLowerCase();
    const results = this.cache
      .filter(pokemon => pokemon.name.toLowerCase().includes(lowerQuery))
      .slice(0, 10);
    
    console.log('Found results:', results.length);
    return results;
  }

  getAllPokemon(): PokemonCacheItem[] {
    return this.cache;
  }
}

export const pokemonCache = new PokemonCacheService();
