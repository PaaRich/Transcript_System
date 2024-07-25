import { Outlet, Link } from "react-router-dom";
import { Container } from "./HeroHeaderStyled";
import BtnBig from "../../components/Btn/BtnBig";

const HeroHeader = () => {
  return (
    <Container>
      <div className="flex items-start justify-between">
        <div className="w-1/2 flex flex-col justify-between">
          <h1 className="text-8xl">
            Transcript
            <br />
            Request
            <br />
            System
            <br />
          </h1>
          <p className="my-5 text-lg font-thin">
            A hustle-free platform for easy aquisition <br /> of academic
            documents
          </p>
          <Link to="sign-in">
            <BtnBig text="Get started" />
          </Link>
        </div>
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default HeroHeader;
