import { TextStyle } from 'react-native';

export type NeutralScale = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 50;

export type NeutralColors = Record<NeutralScale, string>;

export type VariantIntensity = 'intense' | 'base' | 'subtle' | 'soft';

export type VariantColorGroup = {
  intense: string;
  base: string;
  subtle: string;
  soft: string;
};

export type ColorPalette = {
  neutral: NeutralColors;
  primary: VariantColorGroup;
  warning: VariantColorGroup;
  danger: VariantColorGroup;
  success: VariantColorGroup;
};

export type TypographyVariant =
  | 'sm'
  | 'base'
  | 'base-medium'
  | 'base-long'
  | 'h6'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

export type Typography = Record<TypographyVariant, TextStyle>;
