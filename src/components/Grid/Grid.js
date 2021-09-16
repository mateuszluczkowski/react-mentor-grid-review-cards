import styled from "styled-components";
const Grid = styled.div`
   margin: 30px 0;
   position: relative;
   display: grid;
   min-height: 70%;
   width: ${({ theme }) => theme.layout.desktop};
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-template-areas:
      "tile1 tile1 tile2 tile3"
      "tile4 tile5 tile5 tile3";
   gap: 30px 40px;
   @media (max-width: 1480px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
         "tile1 tile1 tile2 "
         "tile4 tile5 tile5"
         "tile3 tile3 empty";
      max-width: 90%;
   }
   @media (max-width: 980px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-template-areas: "tile1" "tile2" "tile4" "tile5" "tile3";
      max-width: 90%;
   }
`;
export default Grid;
