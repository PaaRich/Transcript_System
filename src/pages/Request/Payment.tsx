import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full py-40 bg-blue-500"
      data-aos="flip-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <button className="border-2 p-4" onClick={() => navigate("/status")}>
        Pay
      </button>
    </div>
  );
};

export default Payment;
