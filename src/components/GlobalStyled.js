import 'normalize.css';
import tree from "../images/gift.png"
import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightblue;
  outline: 2px solid red;
  background-image: url(${tree});
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 100vh;
   @media screen and (min-width: 1200px) {
    background-size: 15%;
 }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

button {
    cursor: pointer;
    color: black;
}

p {
  margin: 0;
}
h1, h2 {
  margin: 0;
}

/* *{
  outline: 2px solid red;
} */
`