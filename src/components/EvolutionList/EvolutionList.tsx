import React, { memo } from 'react';
import { PokemonEvolution } from '@/types/pokemon';
import styles from './EvolutionList.module.css';

interface EvolutionListProps {
  evolutions: PokemonEvolution[];
  onEvolutionClick: (evolutionName: string) => void;
}

/**
 * EvolutionList Component
 * Displays Pokemon evolutions as clickable cards
 * Clicking an evolution updates the search query
 */
const EvolutionList: React.FC<EvolutionListProps> = ({ evolutions, onEvolutionClick }) => {
  if (!evolutions || evolutions.length === 0) {
    return null;
  }

  return (
    <div className={styles.evolutionsSection}>
      <h3 className={styles.sectionTitle}>Evolutions</h3>
      <div className={styles.evolutionGrid}>
        {evolutions.map((evolution) => (
          <button
            key={evolution.id}
            onClick={() => onEvolutionClick(evolution.name)}
            className={styles.evolutionCard}
            aria-label={`View ${evolution.name}`}
          >
            <div className={styles.evolutionImageWrapper}>
              <img
                src={evolution.image}
                alt={evolution.name}
                className={styles.evolutionImage}
                loading="lazy"
              />
            </div>
            <div className={styles.evolutionInfo}>
              <h4 className={styles.evolutionName}>{evolution.name}</h4>
              <p className={styles.evolutionNumber}>#{evolution.number}</p>
              <div className={styles.evolutionTypes}>
                {evolution.types.map((type) => (
                  <span key={type} className={`${styles.typeTag} ${styles[type.toLowerCase()]}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(EvolutionList);
