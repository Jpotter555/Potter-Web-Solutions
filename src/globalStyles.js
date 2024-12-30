import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-red: #ff0000;
    --dark-red: #8b0000;
    --black: #000000;
    --dark-gray: #1a1a1a;
    --light-gray: #333333;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: var(--black);
    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--white);
  }
`;

export default GlobalStyle;
