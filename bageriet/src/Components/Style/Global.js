import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html, body {
    width: 100%;
    min-height: 100%;
}

#root {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1820px;
    grid-template-rows: auto 1fr auto;
    margin: auto;
}

img {
    display: block;
    width: 100%;
}
`