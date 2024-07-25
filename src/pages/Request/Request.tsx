import { useNavigate, Outlet } from "react-router-dom";
import { Container } from "./RequestStyled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Profile from "../../assets/undraw_pic_profile_re_7g2h.svg";

interface FormValues {
  Programme: string;
  Programme_of_Study: string;
  Address: string;
  country: string;
  city: string;
  state: string;
}
const Request = () => {
  const navigate = useNavigate();

  const initialValues = {
    Programme: "",
    Programme_of_Study: "",
    Address: "",
    country: "",
    city: "",
    state: "",
  };

  const validationSchema = Yup.object({
    Programme: Yup.string()
      .required("Programme is required")
      .matches(/^[a-zA-Z\s]+$/, "Alphabets and spaces allowed"),
    Programme_of_Study: Yup.string()
      .required("Programme of Study is required")
      .matches(/^[a-zA-Z\s]+$/, "Alphabets and spaces allowed"),
    Address: Yup.string()
      .required("Address is required")
      .matches(/^[a-zA-Z\s]+$/, "Alphabets and spaces allowed"),
    country: Yup.string()
      .required("Country is required")
      .matches(/^[a-zA-Z\s]+$/, "Alphabets and spaces allowed"),
    city: Yup.string()
      .required("Country is required")
      .matches(/^[a-zA-Z\s]+$/, "Alphabets and spaces allowed"),
    state: Yup.string()
      .required("Country is required")
      .matches(/^[a-zA-Z\s]+$/, "Alphabets and spaces allowed"),
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted", values);
  };

  return (
    <Container>
      <div className="flex items-center justify-between pt-10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="w-1/2 flex flex-col items-center">
              <h1 className="text-2xl pl-2 flex items-center">
                <div className="bg-blue-700 h-6 w-1 mr-2 blur-sm"></div>
                Request for transcript
              </h1>
              <img className="w-10 mt-2" src={Profile} alt="Profile" />
              <Form className="flex flex-col">
                <label className="mb-1">
                  Programme
                  <br />
                  <Field
                    name="Programme"
                    className="bg-slate-300 w-full py-2 px-3 rounded outline-none"
                    type="text"
                    placeholder="Programme eg. Regular"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm italic"
                    name="Programme"
                    component="span"
                  />
                </label>
                <label className="mb-1">
                  Programme of Study
                  <br />
                  <Field
                    name="Programme_of_Study"
                    className="bg-slate-300 w-full py-2 px-3 rounded outline-none"
                    type="text"
                    placeholder="Programme of Study"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm italic"
                    name="Programme of Study"
                    component="span"
                  />
                </label>
                *if Document is meant for Organization
                <label className="mb-1">
                  Address of Organization
                  <br />
                  <Field
                    name="Address"
                    className="bg-slate-300 w-full py-2 px-3 rounded outline-none"
                    type="text"
                    placeholder="Address of Organization"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm italic"
                    name="Address"
                    component="span"
                  />
                </label>
                <label className="mb-1">
                  Country
                  <br />
                  <Field
                    name="country"
                    className="bg-slate-300 w-full py-2 px-3 rounded outline-none"
                    type="text"
                    placeholder="Country"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm italic"
                    name="country"
                    component="span"
                  />
                </label>
                <label className="mb-1">
                  City/Town
                  <br />
                  <Field
                    name="city"
                    className="bg-slate-300 w-full py-2 px-3 rounded outline-none"
                    type="text"
                    placeholder="City/Town"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm italic"
                    name="city"
                    component="span"
                  />
                </label>
                <label className="mb-3">
                  State/Region
                  <br />
                  <Field
                    name="state"
                    className="bg-slate-300 w-full py-2 px-3 rounded outline-none"
                    type="text"
                    placeholder="State/Region"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm italic"
                    name="state"
                    component="span"
                  />
                </label>
                <button
                  className="bg-blue-500 rounded text-white py-2"
                  type="submit"
                  onClick={() => navigate("payment")}
                >
                  Submit
                </button>
              </Form>
            </div>
          )}
        </Formik>
        <div className="w-1/2 ">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Request;
