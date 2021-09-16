import styled from "styled-components";
const Grid = styled.div`
   position: relative;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   display: grid;
   height: 70%;
   width: ${({ theme }) => theme.layout.desktop};
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-template-areas:
      "tile1 tile1 tile2 tile3"
      "tile4 tile5 tile5 tile3";
   gap: 30px 40px;
`;
export default Grid;
