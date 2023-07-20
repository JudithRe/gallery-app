import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --header-height: 120px;
  --footer-height: 100px;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    margin: 0;
  }
`;
