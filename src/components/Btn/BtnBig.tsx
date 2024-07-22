import { BigButton } from "./BtnStyled";
import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  text: string;
}

const BtnBig = ({ text }: Props) => {
  return (
    <BigButton>
      <div className="font-semibold text-2xl">{text}</div>
      <div className="rounded-full p-3 ml-4">
        <MdArrowForwardIos size={24} color="white" />
      </div>
    </BigButton>
  );
};

export default BtnBig;
