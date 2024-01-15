import { createGlobalStyle } from "styled-components";
import { theme, fonts } from "../utilities";

const GlobalStyles = createGlobalStyle<{
  theme: typeof theme;
  fonts: typeof fonts;
}>`
    body {
        margin:0;
        padding:0;
        box-sizing:border-box;
        height:100vh;
        font-family:${(props) => props.fonts.primaryFont};
    }
    @media screen and (min-width:375px){
        body{
            /* background:${(props) => props.theme.sventhColor}; */
            background:none;
            text-align:center;
            
        }
    }
    @media screen and (min-width:768px){
        body{
            background:${(props) => props.theme.fistColor};
        }
    }
    @media screen and (min-width:1440px){
        body{
            font-family:${(props) => props.fonts.testFont};
            background:${(props) => props.theme.sventhColor};
        }
    }
    

    
`;

export default GlobalStyles;
