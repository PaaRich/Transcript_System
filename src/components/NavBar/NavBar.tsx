import { Container } from "./NavBarStyled";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";

const NavBar = () => {
  return (
    <Container>
      <div>
        <Link
          to="/"
          className="px-2 py-1 border-2 cursor-pointer hover:bg-black hover:text-white duration-500 border-black rounded-full text-lg font-semibold"
        >
          TS
        </Link>
        <Link to="sign-in">
          <Btn text="Start" />
        </Link>
      </div>
    </Container>
  );
};

export default NavBar;
