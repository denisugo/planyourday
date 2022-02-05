import { createGlobalStyle } from "styled-components";
import { global } from "../../config/colors";

export const GlobalStyle = createGlobalStyle`

    

html{
    height: 100%;
}

body{
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    background-color: ${global.background};
    font-family: 'Lato', sans-serif;
}

#root{
    height: 100%;
    font-family: 'Roboto', sans-serif;
}
`;
