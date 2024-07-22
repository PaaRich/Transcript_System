import { Container } from "./HeroHeaderStyled";
import BtnBig from "../../components/Btn/BtnBig";
import svg from "../../assets/undraw_personal_documents_re_vcf2.svg";
const HeroHeader = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-10">
        <div className="w-1/2 flex flex-col justify-between">
          <h1 className="text-8xl">
            Transcript
            <br />
            Request
            <br />
            System
            <br />
          </h1>
          <p className="my-5 text-lg">
            A hustle-free platform for easy aquisition <br /> of academic
            documents
          </p>
          <BtnBig text="Get started" />
        </div>
        <div className="w-1/2">
          <img className="w-11/12" src={svg} alt="svg" />
        </div>
      </div>
    </Container>
  );
};

export default HeroHeader;
