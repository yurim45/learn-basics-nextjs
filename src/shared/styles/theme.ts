import baseStyled, { ThemedStyledInterface } from 'styled-components';

const size: { [key: string]: number } = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

export const theme = {
  // 반응형
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export type ThemeType = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
