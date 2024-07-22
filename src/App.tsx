import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styled-components/GlobalStyle";
import NavBar from "./components/NavBar/NavBar";
import HeroHeader from "./pages/HeroHeader/HeroHeader";

const App = () => {
  const theme = {
    color: "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <NavBar />
      <HeroHeader />
    </ThemeProvider>
  );
};

export default App;
