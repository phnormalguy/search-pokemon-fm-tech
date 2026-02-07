import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME } from '@/graphql/queries';
import { Pokemon, PokemonQueryResult } from '@/types/pokemon';
import { useEffect, useState } from 'react';

interface UsePokemonResult {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  refetch: (name: string) => void;
}

/**
 * Custom hook for fetching Pokemon data by name
 * Implements proper error handling and loading states
 */
export const usePokemon = (pokemonName: string): UsePokemonResult => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { data, loading, error: queryError, refetch: apolloRefetch } = useQuery<PokemonQueryResult>(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: pokemonName },
      skip: !pokemonName,
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (!loading) {
      if (queryError) {
        setError('Failed to fetch Pokemon data. Please try again.');
        setPokemon(null);
      } else if (data?.pokemon) {
        setPokemon(data.pokemon);
        setError(null);
      } else if (pokemonName) {
        setError(null);
        setPokemon(null);
      }
    }
  }, [data, loading, queryError, pokemonName]);

  const refetch = (name: string) => {
    if (name) {
      apolloRefetch({ name });
    }
  };

  return {
    pokemon,
    loading,
    error,
    refetch,
  };
};
