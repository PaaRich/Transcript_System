import { Button } from "./BtnStyled";
import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  text: string;
}

const Btn = ({ text }: Props) => {
  return (
    <Button>
      <div className="font-semibold">{text}</div>
      <div className="rounded-full p-1 ml-4">
        <MdArrowForwardIos size={20} color="white" />
      </div>
    </Button>
  );
};

export default Btn;
