// import React, { useEffect } from "react";
import React, { useEffect } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "./Container";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email Address is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const newUser = useSelector((state) => state.auth);
  const { isSuccess, isError, isLoading, user } = newUser;

  useEffect(() => {
    if (isSuccess && user) {
      toast.info("User Logged In Successfully!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, user]);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title={"Login"}></Meta>
      <BreadCrum title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  values={formik.values.email}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  values={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                  <button className="button border-0" type="submit">
                    Login
                  </button>
                  <Link to="/signup" className="button signup">
                    SignUp
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
