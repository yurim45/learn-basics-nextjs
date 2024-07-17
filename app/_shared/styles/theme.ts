const size: { [key: string]: number } = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
}

export const theme = {
  // 반응형
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}

export type ThemeType = typeof theme
