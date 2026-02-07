import { useEffect, useState } from 'react';

const STORAGE_KEY = 'pokemon-search-history';
const MAX_HISTORY = 10;

/**
 * Custom hook for managing recent search history
 * Persists data to localStorage for better UX
 */
export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  const addToHistory = (searchTerm: string) => {
    if (!searchTerm) return;

    setHistory((prev) => {
      // Remove duplicates and add to front
      const updated = [
        searchTerm.toLowerCase(),
        ...prev.filter((item) => item !== searchTerm.toLowerCase()),
      ].slice(0, MAX_HISTORY);

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save search history:', error);
      }

      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear search history:', error);
    }
  };

  return {
    history,
    addToHistory,
    clearHistory,
  };
};
