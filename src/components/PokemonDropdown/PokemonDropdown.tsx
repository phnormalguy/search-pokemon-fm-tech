import React, { useState, useEffect, useRef } from 'react';
import { pokemonCache } from '../../services/pokemonCache';
import { PokemonCacheItem, PokemonDropdownProps } from '../../types/pokemon';
import styles from './PokemonDropdown.module.css';

export const PokemonDropdown: React.FC<PokemonDropdownProps> = ({ 
  onSelect, 
  placeholder = "Search Pokemon..." 
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<PokemonCacheItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCache = async () => {
      console.log('Loading Pokemon cache...');
      setIsLoading(true);
      await pokemonCache.loadAllPokemon();
      setIsLoading(false);
      console.log('Pokemon cache loaded successfully!');
    };
    loadCache();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 0) {
      const results = pokemonCache.searchPokemon(value);
      console.log('Search results for:', value, '→', results.length, 'matches');
      setSuggestions(results);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (pokemon: PokemonCacheItem) => {
    setQuery(pokemon.name);
    setIsOpen(false);
    onSelect(pokemon);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setIsOpen(false);
    // Clear the search by calling onSelect with empty name
    onSelect({ id: 0, name: '', imageUrl: '' });
  };

  return (
    <div ref={dropdownRef} className={styles.pokemonDropdown}>
      <div className={styles.pokemonDropdown__inputWrapper}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={isLoading ? "Loading pokemon..." : placeholder}
          className={styles.pokemonDropdown__input}
          disabled={isLoading}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.pokemonDropdown__clearButton}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className={styles.pokemonDropdown__list}>
          {suggestions.map((pokemon) => (
            <div
              key={pokemon.id}
              onClick={() => handleSelect(pokemon)}
              className={styles.pokemonDropdown__item}
            >
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                className={styles.pokemonDropdown__image}
              />
              <span className={styles.pokemonDropdown__name}>
                {pokemon.name}
              </span>
            </div>
          ))}
        </div>
      )}
      
      {isOpen && query.length > 0 && suggestions.length === 0 && (
        <div className={`${styles.pokemonDropdown__list} ${styles.pokemonDropdown__empty}`}>
          No Pokemon found
        </div>
      )}
    </div>
  );
};
