import styled from "styled-components";
export const TileStyled = styled.div`
   padding: 40px 55px 50px 45px;
   border-radius: 10px 10px;
   background-color: ${({ theme, background }) =>
      theme.colors.primary[background]};
   grid-area: ${({ area }) => area};

   box-shadow: ${({ background }) =>
      background === "white" ? "25px 25px 25px rgba(0, 0, 0, 0.04)" : "none"};
   color: ${({ theme, background }) =>
      background === "white"
         ? theme.colors.primary.veryDarkBlackishBlue
         : theme.colors.primary.white};
   @media (max-width: 1480px) {
      padding: 35px 40px 50px 40px;
   }
   @media (max-width: 980px) {
      padding: 20px 30px 35px 35px;
   }
`;

export const MainText = styled.div`
   font-size: 1.8em;
   font-weight: ${({ background }) => (background === "white" ? "600" : "500")};
   margin: 10px 0;
`;
export const SubText = styled.div`
   margin: 10px 0;
   opacity: 0.7;
   font-size: 1.2em;
   line-height: 1.4em;
   font-weight: ${({ background }) => (background === "white" ? "500" : "400")};
`;
