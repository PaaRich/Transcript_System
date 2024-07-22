import { Container } from "./NavBarStyled";
import Btn from "../Btn/Btn";
const NavBar = () => {
  return (
    <Container>
      <div>
        <div className="px-2 py-1 border-2 cursor-pointer hover:bg-black hover:text-white duration-200 border-black rounded-full text-lg font-semibold">
          TS
        </div>
        <Btn text="Start" />
      </div>
    </Container>
  );
};

export default NavBar;
