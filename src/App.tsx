import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styled-components/GlobalStyle";
import HeroHeader from "./pages/HeroHeader";
const App = () => {
  const theme = {
    color: "white",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <HeroHeader />
    </ThemeProvider>
  );
};

export default App;
