import React, { useCallback, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createApolloClient } from '@/lib/apollo-client';
import { GET_POKEMON_BY_NAME } from '@/graphql/queries';
import { Pokemon, PokemonQueryResult, PokemonCacheItem } from '@/types/pokemon';
import { useQueryParam } from '@/hooks/useQueryParam';
import { usePokemon } from '@/hooks/usePokemon';
import SearchInput from '@/components/SearchInput';
import { PokemonDropdown } from '@/components/PokemonDropdown';
import PokemonResult from '@/components/PokemonResult';
import PokemonNotFound from '@/components/PokemonNotFound';
import LoadingSpinner from '@/components/LoadingSpinner';
import styles from '@/styles/Home.module.css';

interface HomePageProps {
  initialPokemon: Pokemon | null;
  initialSearchTerm: string;
}

/**
 * Home Page Component
 * Implements SSR for initial Pokemon data
 * Uses URL query parameters for search state
 * Supports client-side navigation for evolutions
 */
export default function HomePage({ initialPokemon, initialSearchTerm }: HomePageProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useQueryParam('search');
  const { pokemon, loading, error } = usePokemon(searchQuery);

  // Use initial SSR data or client-fetched data
  const displayPokemon = searchQuery ? pokemon : initialPokemon;
  const displaySearchTerm = searchQuery || initialSearchTerm;

  // Handle search submission
  const handleSearch = useCallback(
    (searchTerm: string) => {
      setSearchQuery(searchTerm.toLowerCase());
    },
    [setSearchQuery]
  );

  // Handle evolution click
  const handleEvolutionClick = useCallback(
    (evolutionName: string) => {
      setSearchQuery(evolutionName.toLowerCase());
      // Scroll to top for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setSearchQuery]
  );

  // Handle Pokemon dropdown selection
  const handlePokemonSelect = useCallback(
    (pokemon: PokemonCacheItem) => {
      if (pokemon.name) {
        setSearchQuery(pokemon.name.toLowerCase());
        // Scroll to top for better UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Clear search when name is empty
        setSearchQuery('');
      }
    },
    [setSearchQuery]
  );

  // Handle title click to clear search
  const handleTitleClick = useCallback(() => {
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [setSearchQuery]);

  return (
    <>
      <Head>
        <title>
          {displayPokemon
            ? `${displayPokemon.name} - Search Pokemon`
            : 'Search Pokemon - FM Tech'}
        </title>
        <meta
          name="description"
          content={
            displayPokemon
              ? `View detailed information about ${displayPokemon.name} including attacks, evolutions, and stats.`
              : 'Search and explore Pokemon data with GraphQL. Find information about attacks, evolutions, types, and more.'
          }
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.title}>
              <button 
                onClick={handleTitleClick}
                className={styles.titleButton}
                aria-label="Clear search and return to home"
              >
                Pokemon Search
              </button>
            </h1>
            <p className={styles.subtitle}>
              Explore Pokemon data with attacks, evolutions, and detailed stats
            </p>
          </header>

          {/* Search Input */}
          <div className={styles.searchSection}>
            <PokemonDropdown 
              onSelect={handlePokemonSelect}
              placeholder="ค้นหาโปเกมอนด้วยชื่อ (เช่น Pikachu, Charizard)"
            />
          </div>

          {/* Results Section */}
          <div className={styles.resultsSection}>
            {loading && <LoadingSpinner />}
            
            {!loading && error && (
              <div className={styles.errorMessage}>{error}</div>
            )}

            {!loading && !error && displaySearchTerm && !displayPokemon && (
              <PokemonNotFound searchTerm={displaySearchTerm} />
            )}

            {!loading && !error && displayPokemon && (
              <PokemonResult
                pokemon={displayPokemon}
                onEvolutionClick={handleEvolutionClick}
              />
            )}

            {!loading && !displaySearchTerm && (
              <div className={styles.welcomeMessage}>
                <div className={styles.welcomeIcon}>🔍</div>
                <h2>Welcome to Pokemon Search!</h2>
                <p>Enter a Pokemon name to get started</p>
                <div className={styles.exampleSearches}>
                  <p>Try searching for:</p>
                  <div className={styles.exampleButtons}>
                    <button onClick={() => handleSearch('pikachu')} className={styles.exampleBtn}>
                      Pikachu
                    </button>
                    <button onClick={() => handleSearch('charizard')} className={styles.exampleBtn}>
                      Charizard
                    </button>
                    <button onClick={() => handleSearch('mewtwo')} className={styles.exampleBtn}>
                      Mewtwo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * Server-Side Rendering
 * Pre-fetches Pokemon data if search query exists in URL
 * Improves initial page load performance and SEO
 */
export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const searchTerm = context.query.search as string | undefined;

  if (!searchTerm) {
    return {
      props: {
        initialPokemon: null,
        initialSearchTerm: '',
      },
    };
  }

  try {
    const apolloClient = createApolloClient();
    const { data } = await apolloClient.query<PokemonQueryResult>({
      query: GET_POKEMON_BY_NAME,
      variables: { name: searchTerm.toLowerCase() },
    });

    return {
      props: {
        initialPokemon: data.pokemon,
        initialSearchTerm: searchTerm.toLowerCase(),
      },
    };
  } catch (error) {
    console.error('SSR Error fetching Pokemon:', error);
    return {
      props: {
        initialPokemon: null,
        initialSearchTerm: searchTerm.toLowerCase(),
      },
    };
  }
};
