import React, { memo } from 'react';
import styles from './PokemonNotFound.module.css';

interface PokemonNotFoundProps {
  searchTerm: string;
}

/**
 * PokemonNotFound Component
 * Displays a clear "not found" state with helpful suggestions
 */
const PokemonNotFound: React.FC<PokemonNotFoundProps> = ({ searchTerm }) => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <div className={styles.icon}>❌</div>
        <h2 className={styles.title}>Pokemon Not Found</h2>
        <p className={styles.message}>
          No Pokemon found with the name{' '}
          <strong className={styles.searchTerm}>&quot;{searchTerm}&quot;</strong>
        </p>
        <div className={styles.suggestions}>
          <h3>Suggestions:</h3>
          <ul>
            <li>Check your spelling</li>
            <li>Try a different Pokemon name</li>
            <li>Try popular Pokemon like: Pikachu, Bulbasaur, Charmander</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(PokemonNotFound);
