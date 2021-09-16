import {
   AuthorWrapper,
   AuthorName,
   AuthorStatus,
   AuthorPicture,
} from "./AuthorLabel.css";

const AuthorLabel = ({ dataAuthor, background }) => {
   const { name, surname, status, imgPath } = dataAuthor;
   return (
      <AuthorWrapper>
         <AuthorPicture path={imgPath} background={background} src={imgPath} />
         <AuthorName background={background}>
            {name} {surname}
         </AuthorName>
         <AuthorStatus background={background}>{status}</AuthorStatus>
      </AuthorWrapper>
   );
};
export default AuthorLabel;
