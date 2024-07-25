import { Outlet } from "react-router-dom";
import HostNavBar from "./HostNavBar";

const HostPage = () => {
  return (
    <section className="h-fit">
      <HostNavBar />
      <Outlet />
    </section>
  );
};

export default HostPage;
