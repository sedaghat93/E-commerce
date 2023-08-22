import "../../App.scss";
import "./Signup.scss";
import { Form, Field, ErrorMessage, Formik, isValid } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import hidePwdImg from "../../assets/icon-pwd/hide-password.svg";
import showPwdImg from "../../assets/icon-pwd/show-password.svg";
import { signupUser } from "../../services/signupUser";
import { useAuthAction } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .required("PhoneNumber is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  // password: Yup.string().required("Password is required").matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //     ),
  password: Yup.string()
    .required("Password is required")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
    //   "Must Contain 5 Characters,  One Lowercase, One Number"
    // )
    ,
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Paswords must match"),
});

const SignupForm = () => {

  const [error, setError] = useState(null);
  const [isPwd, setIsPwd] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthAction();

  const onSubmit = async (values) => {
    const {name, email, phoneNumber, password} = values;

    const userData = {
      name,
      email,
      phoneNumber,
      password
    };
    
    try {
      const {data} = await signupUser(userData);
      console.log(data);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      toast.success("Success SignUp !", {
        position: toast.POSITION.TOP_RIGHT,
        closeOnClick: true,
      });
      setError(null);
      navigate("/");
    } 
    
    catch (error) {
      console.log(error.response.data);
      if(error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };
  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({isSubmitting}) => (
        <div className="form bg-whitesmoke">
        <div className="form-register py-7">
          <Form className="formControl signup-form container py-2">
            {isSubmitting && <div>Loading ...</div>}
            <div className="information">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input-information"
                
              />
              <p className="errorMessage-form">
                <ErrorMessage name="name" />
              </p>
            </div>

            <div className="information">
              <label htmlFor="email">Email</label>
              <Field
                type="emial"
                id="email"
                name="email"
                className="input-information"
              />
              <p className="errorMessage-form">
                <ErrorMessage name="email" />
              </p>
            </div>

            <div className="information">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="input-information"
              />
              <p className="errorMessage-form">
                <ErrorMessage name="phoneNumber" />
              </p>
            </div>

            <div className="information">
              <label htmlFor="password">Password</label>

              <div className=" info-pwd">
                <Field
                  type={isPwd ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input-information"
                />
                <img
                  title={isPwd ? "Hide password" : "Show password"}
                  src={isPwd ? showPwdImg : hidePwdImg}
                  onClick={() => setIsPwd((prevState) => !prevState)}
                  className="pwd-img"
                />
              </div>
              <p className="errorMessage-form">
                <ErrorMessage name="password" />
              </p>
            </div>

            <div className="information">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="Password"
                id="confirmPassword"
                name="confirmPassword"
                className="input-information"
              />
              <p className="errorMessage-form">
                <ErrorMessage name="confirmPassword" />
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button">Submit
            </button>

            {error && <p style={{color:"red"}}>{error}</p>}

            <Link to="/login" className="signup-ditail">
              <p>Already have an account. login?</p>
            </Link>
          </Form>
        </div>
      </div>
    )}
    </Formik>
  );
};

export default SignupForm;
