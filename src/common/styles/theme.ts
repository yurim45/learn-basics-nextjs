import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from "styled-components";

const size: { [key: string]: number } = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

const colors = {
  white: "#fff",
  black: "#000",
  textColor: "#5d5d5d",
  gray: "#D3D3D3",
  lightgray: "#eaeaea",
  blue: "#3178C6",
};

export const theme = {
  colors,
  // 반응형
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export type ThemeType = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ThemeType>;
