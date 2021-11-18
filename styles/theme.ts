import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from 'styled-components';

const size: { [key: string]: number } = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

const colors = {
  white: '#fff',
  black: '#000',
  grey: '#eaeaea',
};

const theme = {
  colors,
  // 반응형
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
