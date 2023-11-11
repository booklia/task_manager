import { createGlobalStyle } from "styled-components";

const GlobalResets = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }

  button,
  input,
  select,
  textarea
  {
    font: inherit;
  }
  
  textarea {
    resize: none;
    height: 150px;
  }

  a {
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export { GlobalResets };
