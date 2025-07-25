import { COLORS } from 'theme';

export const useDisabledButtonColor = (isDisabled = false, customColor?: string) => {
  return isDisabled ? COLORS.nakedButton : customColor || COLORS.white;
};
