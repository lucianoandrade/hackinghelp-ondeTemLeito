import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
  
  html{
    height: 100%;
    width: 100%;
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    font-family: 'Roboto';
  }

 #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
