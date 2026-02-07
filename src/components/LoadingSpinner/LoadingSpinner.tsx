import React, { memo } from 'react';
import styles from './LoadingSpinner.module.css';

/**
 * LoadingSpinner Component
 * Displays an animated loading state
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading Pokemon data...</p>
    </div>
  );
};

export default memo(LoadingSpinner);
