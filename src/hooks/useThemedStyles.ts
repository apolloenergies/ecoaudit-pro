import { useMemo } from 'react';

import { useTheme } from 'contexts';

export function useThemedStyles<T>(makeStyles: (theme: any) => T): T {
  const theme = useTheme();
  return useMemo(() => makeStyles(theme), [theme]);
}
