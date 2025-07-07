import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useLogoPosition() {
  const insets = useSafeAreaInsets();

  const LOGO_SIZE = 70;
  const HEADER_HEIGHT = 56;
  const HORIZONTAL_MARGIN = 32;

  const top = insets.top + (HEADER_HEIGHT - LOGO_SIZE) / 2 + 20;
  const left = HORIZONTAL_MARGIN;

  return { top, left, size: LOGO_SIZE };
}
