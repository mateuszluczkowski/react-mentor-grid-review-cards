import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:${({ theme }) => theme.typography.fontFamily}
};
 #root {
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    width:100%;
    font-size:${({ theme }) => theme.typography.fontSize};
    background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
    
};
`;
export default GlobalStyles;
