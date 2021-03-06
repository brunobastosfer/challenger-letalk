import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F6F6F6;
    --button: #F3A126;
    --blue: #5429cc;
    --gren: #33cc95;

    --blue_ligth: #6933FF;

    --text_title: #8F99A6;
    --text_price: #333333;
    --text_body: #969cb3;

    --shape: #FFFFFF;

    --input_background: #e7e9ee;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }

  }

  body {
    background-color: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`