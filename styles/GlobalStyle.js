import { createGlobalStyle } from 'styled-components';
import variables from './Variables';
// import bgImg from '../components/content/bg.jpg';

const bgImg = '../components/content/bg.jpg';

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
    ${'' /* background-image: url(${bgImg}); */}
    background-color: var(--dark-bg);
    color: var(--white-font);
  }

  header {
    background-color: transparent;
  }

  main {
    margin: 0 auto;
    width: 100%;
    background-image: url(${bgImg});

  }

  section {
    margin: 0 auto;
    padding: 0 4%;
  }
`;

export default GlobalStyle;
