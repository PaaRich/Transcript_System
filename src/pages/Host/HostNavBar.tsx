import { Container } from "../../components/NavBar/NavBarStyled";
import { Link } from "react-router-dom";
import Btn from "../../components/Btn/Btn";
import ProfileImg from "../../assets/undraw_pic_profile_re_7g2h.svg";
import Profile from "../../components/Profile/Profile";
import { useState } from "react";

const HostNavBar = () => {
  const [profile, setProfile] = useState(false);
  return (
    <Container>
      <div>
        <Link
          to="/"
          className="px-2 py-1 border-2 cursor-pointer hover:bg-black hover:text-white duration-500 border-black rounded-full text-lg font-semibold"
        >
          TS
        </Link>
        <div className="w-1/3">
          <div className="flex items-center justify-around">
            <div
              className="flex items-end cursor-pointer"
              onClick={() => setProfile(!profile)}
            >
              <img className="w-10 mr-3" src={ProfileImg} alt="Profile" />
              <p className="text-lg">Richmond</p>
              {profile && <Profile />}
            </div>
            <Link to="log-out">
              <Btn text="Log-out" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HostNavBar;
