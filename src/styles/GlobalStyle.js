import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --body-background: #dcdde1;
    --custom-yellow: #fbc531;
    --dark-blue: #192a56;
    --light-blue: #273c75;
    --light-gray: #f5f6fa;
    --main-font: 'Red Hat Text', sans-serif;
    font-family: var(--main-font);
    font-size: 62.5%;
  }

  body {
    background-color: var(--body-background);
    font-size: 1.6rem;
  }

`;

export default GlobalStyle;
