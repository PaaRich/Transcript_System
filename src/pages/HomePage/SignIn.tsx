import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  index_number: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    index_number: "",
    password: "",
  };

  const validationSchema = Yup.object({
    index_number: Yup.string().required("Index Number required"),
    //.matches(/^UE[AB]\d{5}(1[7-9]|2[0-4])$/, "Format UEB*****[17-20]"),
    password: Yup.string().required("Password required"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})$/,
    //   "Alphabet,characters at least 8"
    // ),
  });
  const handleSubmit = (values: FormValues) => {
    console.log("form values", values);
    navigate("/request");
  };
  return (
    <div data-aos="flip-left" className="flex flex-col items-center">
      <div>
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.25 68.75V62.5C56.25 52.125 59.375 43.75 75 43.75C90.625 43.75 93.75 52.125 93.75 62.5V68.75"
            stroke="#3699A7"
            strokeWidth="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M75 91.25C77.0713 91.25 78.75 89.5713 78.75 87.5C78.75 85.4294 77.0713 83.75 75 83.75C72.9288 83.75 71.25 85.4294 71.25 87.5C71.25 89.5713 72.9288 91.25 75 91.25Z"
            stroke="#3699A7"
            strokeWidth="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M90.625 106.25H59.375C46.875 106.25 43.75 103.125 43.75 90.625V84.375C43.75 71.875 46.875 68.75 59.375 68.75H90.625C103.125 68.75 106.25 71.875 106.25 84.375V90.625C106.25 103.125 103.125 106.25 90.625 106.25Z"
            stroke="#3699A7"
            strokeWidth="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M75 137.5C109.517 137.5 137.5 109.517 137.5 75C137.5 40.4822 109.517 12.5 75 12.5C40.4822 12.5 12.5 40.4822 12.5 75C12.5 109.517 40.4822 137.5 75 137.5Z"
            stroke="#3699A7"
            strokeWidth="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col items-center w-full mt-5 " action="">
            <Field
              className="bg-slate-200 py-3 px-3 w-3/4 md:w-2/4 rounded-sm outline-none"
              type="text"
              name="index_number"
              placeholder="Index Number eg.UEB*******"
              required
            />
            <ErrorMessage
              className="text-sm text-red-500 italic"
              name="index_number"
              component="span"
            />
            <Field
              className="bg-slate-200 py-3 px-3 w-3/4 md:w-2/4 rounded-sm outline-none mt-5"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <ErrorMessage
              name="index_number"
              className="text-sm text-red-500 italic"
              component="span"
            />

            <button
              disabled={!isValid}
              className="bg-blue-600 hover:bg-blue- text-white duration-500  py-2 px-3 w-2/4 rounded my-5"
              type="submit"
            >
              Submit
            </button>
            <p>
              Not registered? Sign-Up{" "}
              <Link className="text-blue-500 hover:underline" to="/sign-up">
                here
              </Link>{" "}
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
