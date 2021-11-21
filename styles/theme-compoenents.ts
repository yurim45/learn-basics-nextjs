import * as styledComponent from 'styled-components';
import { Theme } from './theme';

const {
  default: styeld,
  css,
  keyframes,
  ThemeProvider,
} = styledComponent as styledComponent.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, ThemeProvider };
export default styled;
