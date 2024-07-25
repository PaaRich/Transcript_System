import { Container } from "./RequestStyled";
import { useNavigate } from "react-router-dom";

const Status = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="py-10 h-full">
        <div className="text-2xl flex items-center mb-10">
          <div className="bg-blue-700 h-6 w-1 mr-2 blur-sm"></div>
          <p>Pending Request</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="justify-between bg-slate-100 flex items-center border-2 rounded-md py-2 px-5 w-1/2">
            <p>Request ID : UENR96c8-de5b5f66e55f</p>
            <button className="bg-red-100 py-1 px-3 text-red-600 hover:bg-red-300 duration-500 rounded-lg">
              cancel
            </button>
          </div>
          <button
            className="bg-blue-500 py-2 px-5 text-white rounded-lg hover:bg-blue-600 duration-500"
            onClick={() => navigate("/request")}
          >
            New Request
          </button>
        </div>
        <div className="mt-20">
          <p>What's next</p>
          <ol type="1">
            <li>1. Come along with your student ID, for better experience</li>
            <li>
              2. Make sure the telephone on your student profile is active
            </li>
            <li>3. Represent yourself when needed</li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Status;
