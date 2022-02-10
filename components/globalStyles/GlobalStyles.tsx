import { createGlobalStyle } from "styled-components";
import { global, header } from "../../config/colors";

export const GlobalStyle = createGlobalStyle`

    

html{
    height: 100%;
    background-color: ${header.background}
}

body{
    margin: 0;
    width: 100vw;
    overflow-x: scroll;
    height: auto;
    box-sizing: border-box;
    background-color: ${global.background};
    font-family: 'Lato', sans-serif;
}

#root{
    height: 100%;
   
}
`;
