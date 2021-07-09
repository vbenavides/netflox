import { createGlobalStyle } from 'styled-components';
import variables from './Variables';

const GlobalStyle = createGlobalStyle`
  ${variables}

  html {
    box-sizing: border-box;
    ${'' /* width:100%; */}
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    color: var(--white-font);
    font-family: Helvetica, sans-serif;
  }

  header {
    background-color: transparent;
  }

  main {
    margin: 0 auto;
    width: 100%;

  }

  section {
    margin: 0 auto;
    padding: 0 4%;
  }
`;

export default GlobalStyle;
