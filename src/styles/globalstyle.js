import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --imprima: 'Imprima', sans-serif;
    --inter: 'Inter', sans-serif;
    --leckerli: 'Leckerli One', cursive;

    /* Colors */
    --white: #FFFFFF;
    --black: #000000;
    --black-transparent:  #00000060;
    --purple: #5603AD;
}

 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 body {
  background: #FFFFFF;
  color: #000000;
  -webkit-font-smoothing: antialiased;
 }

 body, input, button, table {
  font-size: 1rem;
  font-family: var(--inter);
 }

 #root {
  margin: 0;
  padding: 0;
  max-width: 0;
 }

 button {
  cursor: pointer;
 }
 
 #main-content{
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
 }

 h1 {
    margin: 40px 0;
    font-size: 1.5rem;
 }
`;
