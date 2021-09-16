import { ThemeProvider } from "styled-components";

import { Grid, Tile } from "components";

import theme from "utils/theme";
import GlobalStyles from "utils/GlobalStyles";

import opinions from "data/opinions";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Grid>
            {opinions.map((opinion) => (
               <Tile opinionData={opinion} key={opinion.author.surname} />
            ))}
         </Grid>
      </ThemeProvider>
   );
};
export default App;
