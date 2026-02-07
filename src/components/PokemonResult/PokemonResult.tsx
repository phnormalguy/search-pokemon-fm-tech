import React, { memo } from 'react';
import { Pokemon } from '@/types/pokemon';
import EvolutionList from '@/components/EvolutionList';
import styles from './PokemonResult.module.css';

interface PokemonResultProps {
  pokemon: Pokemon;
  onEvolutionClick: (evolutionName: string) => void;
}

/**
 * PokemonResult Component
 * Displays comprehensive Pokemon information including:
 * - Basic info (name, number, classification)
 * - Physical attributes (height, weight)
 * - Types, resistances, and weaknesses
 * - Attacks (fast and special)
 * - Evolutions
 */
const PokemonResult: React.FC<PokemonResultProps> = ({ pokemon, onEvolutionClick }) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.card}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={styles.pokemonImage}
              loading="eager"
            />
          </div>
          <div className={styles.headerInfo}>
            <h1 className={styles.pokemonName}>{pokemon.name}</h1>
            <p className={styles.pokemonNumber}>#{pokemon.number}</p>
            <p className={styles.classification}>{pokemon.classification}</p>
            <div className={styles.types}>
              {pokemon.types.map((type) => (
                <span key={type} className={`${styles.typeTag} ${styles[type.toLowerCase()]}`}>
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Height</span>
              <span className={styles.statValue}>
                {pokemon.height.minimum} - {pokemon.height.maximum}
              </span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Weight</span>
              <span className={styles.statValue}>
                {pokemon.weight.minimum} - {pokemon.weight.maximum}
              </span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Max CP</span>
              <span className={styles.statValue}>{pokemon.maxCP}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Max HP</span>
              <span className={styles.statValue}>{pokemon.maxHP}</span>
            </div>
          </div>
        </div>

        {/* Types Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.infoRow}>
            <h3 className={styles.infoTitle}>Resistant to</h3>
            <div className={styles.infoTags}>
              {pokemon.resistant.map((type) => (
                <span key={type} className={styles.infoTag}>
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.infoRow}>
            <h3 className={styles.infoTitle}>Weak against</h3>
            <div className={styles.infoTags}>
              {pokemon.weaknesses.map((type) => (
                <span key={type} className={`${styles.infoTag} ${styles.weakness}`}>
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Attacks Section */}
        <div className={styles.attacksSection}>
          <h2 className={styles.sectionTitle}>Attacks</h2>
          
          {/* Fast Attacks */}
          <div className={styles.attackCategory}>
            <h3 className={styles.attackTitle}>Fast Attacks</h3>
            <div className={styles.attackGrid}>
              {pokemon.attacks.fast.map((attack, index) => (
                <div key={`${attack.name}-${index}`} className={styles.attackCard}>
                  <div className={styles.attackHeader}>
                    <span className={styles.attackName}>{attack.name}</span>
                    <span className={styles.attackDamage}>{attack.damage} DMG</span>
                  </div>
                  <span className={`${styles.attackType} ${styles[attack.type.toLowerCase()]}`}>
                    {attack.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Attacks */}
          <div className={styles.attackCategory}>
            <h3 className={styles.attackTitle}>Special Attacks</h3>
            <div className={styles.attackGrid}>
              {pokemon.attacks.special.map((attack, index) => (
                <div key={`${attack.name}-${index}`} className={styles.attackCard}>
                  <div className={styles.attackHeader}>
                    <span className={styles.attackName}>{attack.name}</span>
                    <span className={styles.attackDamage}>{attack.damage} DMG</span>
                  </div>
                  <span className={`${styles.attackType} ${styles[attack.type.toLowerCase()]}`}>
                    {attack.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Evolutions Section */}
        {pokemon.evolutions && pokemon.evolutions.length > 0 && (
          <EvolutionList evolutions={pokemon.evolutions} onEvolutionClick={onEvolutionClick} />
        )}
      </div>
    </div>
  );
};

export default memo(PokemonResult);
