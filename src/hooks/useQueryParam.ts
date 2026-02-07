import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

/**
 * Custom hook for managing URL query parameters
 * Syncs component state with URL search params
 */
export const useQueryParam = (key: string) => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');

  // Initialize value from URL on mount
  useEffect(() => {
    if (router.isReady) {
      const queryValue = router.query[key];
      setValue(typeof queryValue === 'string' ? queryValue : '');
    }
  }, [router.isReady, router.query, key]);

  // Function to update URL query parameter
  const updateQueryParam = useCallback(
    (newValue: string) => {
      setValue(newValue);
      
      if (!router.isReady) return;

      const query = { ...router.query };
      
      if (newValue) {
        query[key] = newValue;
      } else {
        delete query[key];
      }

      router.push(
        {
          pathname: router.pathname,
          query,
        },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router, key]
  );

  return [value, updateQueryParam] as const;
};
