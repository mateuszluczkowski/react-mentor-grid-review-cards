import { TileStyled, MainText, SubText } from "./Tile.css";
import { AuthorLabel } from "components";
const Tile = ({ opinionData }) => {
   const { author, mainText, subText, layout } = opinionData;

   return (
      <TileStyled area={layout.area} background={layout.background}>
         <AuthorLabel dataAuthor={author} background={layout.background} />
         <MainText background={layout.background}>{mainText}</MainText>
         <SubText background={layout.background}>" {subText} "</SubText>
      </TileStyled>
   );
};
export default Tile;
