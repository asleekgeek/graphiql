import { useEffect, useState } from 'react';
import { useStorageContext } from './storage';

/**
 * The value `null` semantically means that the user does not explicitly choose
 * any theme, so we use the system default.
 */
export type Theme = 'light' | 'dark' | null;

export function useTheme(defaultTheme: Theme = null) {
  const storageContext = useStorageContext();

  const [theme, setThemeInternal] = useState<Theme>(() => {
    if (!storageContext) {
      return null;
    }

    const stored = storageContext.get(STORAGE_KEY);
    switch (stored) {
      case 'light':
        return 'light';
      case 'dark':
        return 'dark';
      default:
        if (typeof stored === 'string') {
          // Remove the invalid stored value
          storageContext.set(STORAGE_KEY, '');
        }
        return defaultTheme;
    }
  });

  useEffect(() => {
    document.body.classList.remove('graphiql-light', 'graphiql-dark');
    if (theme) {
      document.body.classList.add(`graphiql-${theme}`);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    storageContext?.set(STORAGE_KEY, newTheme || '');
    setThemeInternal(newTheme);
  };

  return { theme, setTheme };
}

const STORAGE_KEY = 'theme';
