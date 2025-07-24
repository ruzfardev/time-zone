import { useState, useMemo } from 'react';
import type { TimeZone } from '@/types/timezone';

export interface UseSearchProps {
  data: TimeZone[];
  searchFields?: (keyof TimeZone)[];
}

export function useSearch({ 
  data, 
  searchFields = ['city', 'country', 'abbreviation'] 
}: UseSearchProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    
    return data.filter((item) => {
      return searchFields.some((field) => {
        const value = item[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    });
  }, [data, query, searchFields]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setIsSearching(searchQuery.trim().length > 0);
  };

  const clearSearch = () => {
    setQuery('');
    setIsSearching(false);
  };

  const hasResults = searchResults.length > 0;
  const hasQuery = query.trim().length > 0;
  const noResults = hasQuery && !hasResults;

  return {
    query,
    searchResults,
    isSearching,
    hasResults,
    hasQuery,
    noResults,
    handleSearch,
    clearSearch,
    setQuery,
  };
}