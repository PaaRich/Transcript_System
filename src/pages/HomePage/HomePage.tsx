import HeroHeader from "../HeroHeader/HeroHeader";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <section className="h-screen">
      <NavBar />
      <HeroHeader />
    </section>
  );
};

export default HomePage;
