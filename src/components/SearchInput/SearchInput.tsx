import React, { useCallback, useState, useEffect, memo } from 'react';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  initialValue?: string;
  onSearch: (searchTerm: string) => void;
}

/**
 * SearchInput Component
 * Handles Pokemon name search with autocomplete from history
 * Syncs with URL query parameters through parent component
 */
const SearchInput: React.FC<SearchInputProps> = ({ initialValue = '', onSearch }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { history, addToHistory } = useSearchHistory();

  // Sync input value with prop changes (e.g., from URL)
  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      
      if (trimmedValue) {
        addToHistory(trimmedValue);
        onSearch(trimmedValue);
        setShowSuggestions(false);
      }
    },
    [inputValue, onSearch, addToHistory]
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0 && history.length > 0);
  }, [history.length]);

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      setInputValue(suggestion);
      onSearch(suggestion);
      setShowSuggestions(false);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setInputValue('');
    onSearch('');
    setShowSuggestions(false);
  }, [onSearch]);

  const filteredHistory = history.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(inputValue.length > 0 && history.length > 0)}
            placeholder="Search Pokemon by name (e.g., Pikachu)"
            className={styles.searchInput}
            aria-label="Search Pokemon"
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
        <button type="submit" className={styles.searchButton} disabled={!inputValue.trim()}>
          Search
        </button>
      </form>

      {showSuggestions && filteredHistory.length > 0 && (
        <ul className={styles.suggestions}>
          {filteredHistory.slice(0, 5).map((suggestion, index) => (
            <li
              key={`${suggestion}-${index}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={styles.suggestionItem}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(SearchInput);
