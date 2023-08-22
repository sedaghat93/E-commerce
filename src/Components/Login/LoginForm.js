import "../../App.scss";
import "./Login.scss";
import { Form, Field, ErrorMessage, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import hidePwdImg from "../../assets/icon-pwd/hide-password.svg";
import showPwdImg from "../../assets/icon-pwd/show-password.svg";
import { loginUser } from "../../services/loginUser";
import { useAuthAction } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';

const initialValues = {
  email: "",
  password: ""
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});

const LoginForm = () => {
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isPwd, setIsPwd] = useState(false);


  const onSubmit =async (values) => {
    console.log(values);
    try {
      const {data} = await loginUser(values);
      console.log(data);
      setAuth(data);
      toast.success("Success Login !", {
        position: toast.POSITION.TOP_RIGHT,
        closeOnClick: true,
      });
      // localStorage.setItem("authState", JSON.stringify(data));
      navigate("/");
      setError(null);

    } 
    catch (error) {
      console.log(error);
      if(error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      isSunmitting
    >
      <div className="form bg-whitesmoke">
        <div className="form-register py-7">
          <Form className="formControl login-form container py-2">

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
            <button className="submit-button">Submit</button>

            {error && <p style={{color:"red"}}>{error}</p>}

            <Link to="/signup" className="signup-ditail">
              <p>Not signup yet?</p>
            </Link>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default LoginForm;

