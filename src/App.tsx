import AOS from "aos";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styled-components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Svg from "./pages/HomePage/Svg";
import SignIn from "./pages/HomePage/SignIn";
import SignUp from "./pages/HomePage/SignUp";
import HostPage from "./pages/Host/HostPage";
import Request from "./pages/Request/Request";
import RequestSvg from "./pages/Request/RequestSvg";
import Payment from "./pages/Request/Payment";
import Status from "./pages/Request/Status";

AOS.init();

const App = () => {
  const theme = {
    color: "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Svg />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<HostPage />}>
          <Route path="/request" element={<Request />}>
            <Route index element={<RequestSvg />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="/status" element={<Status />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
