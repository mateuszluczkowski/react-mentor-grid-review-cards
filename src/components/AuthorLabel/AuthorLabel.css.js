import styled from "styled-components";
export const AuthorWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: auto 1fr;
   grid-template-rows: 1fr auto auto 1fr;
   grid-template-areas: "picture a" "picture name" "picture status" "picture b";
   align-items: center;
   gap: 3px;
`;
export const AuthorName = styled.div`
   grid-area: name;
   font-size: 1.3em;
   font-weight: ${({ background }) => (background === "white" ? "500" : "400")};
`;
export const AuthorStatus = styled.div`
   grid-area: status;
   opacity: 0.5;
   font-size: 1.1em;
   font-weight: ${({ background }) => (background === "white" ? "500" : "400")};
`;
export const AuthorPicture = styled.img`
   grid-area: picture;

   height: 70%;
   margin-right: 20px;
   border: ${({ background, theme }) => {
      if (background === "moderateViolet")
         return "3px solid rgba(255, 255, 255, 0.5)";
      else if (background === "veryDarkBlackishBlue")
         return `3px solid ${theme.colors.primary.moderateViolet}`;
      else return "none";
   }};
   border-radius: 50%;
`;
