import { Formik, Form, Field } from "formik";
import Button from "../../components/Button";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../reducers/Auth";
import { RootState } from "../../reducers/index";
import { handleSignin, handleSignUp } from "../../actions/auth";
import { signUp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import * as Yup from "yup"; // Import Yup for validation
import { useState } from "react";

interface initialValues {
  email: string;
  password: string;
  username: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
  username: Yup.string().when("isSignup", {
    is: true,
    then: Yup.string().required("Username is required"),
  }),
  confirmPassword: Yup.string().when("isSignup", {
    is: true,
    then: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  }),
  role: Yup.string().default("user").required("Please select a role"),
});

function AuthForm() {
  const initialValues = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    role: "",
  } as initialValues;

  let dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleForm());
  };
  let navigate = useNavigate();
  const { isSignup } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthentication = async (values: initialValues) => {
    setIsLoading(true);
    try {
      if (isSignup) {
        // @ts-ignore
        const data = await dispatch(handleSignUp(values));
        if (data?.payload) {
          toast.success("Sign up successful!");
          navigate("/redirect", { state: data?.payload });
        } else {
          toast.error("Sign up failed!");
        }
      } else {
        let { email, password } = values;
        let data = { email, password };
        const response = await dispatch(handleSignin(data));
        if (response?.meta.requestStatus === "fulfilled") {
          toast.success("Logged in successfully!");
          navigate("/dashboard");
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  let src = `https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full text-xs md:text-base form-body flex flex-row md:w-[60vw] md:h-[60vh] mx-auto items-center shadow-lg">
        <div className="relative w-full h-full flex-[0.5] items-center justify-center hidden md:flex">
          <img src={src} alt="" className="object-cover h-full w-full" />
        </div>

        <div className="authform w-full h-full md:flex-[0.5] flex flex-col items-center justify-center gap-2 relative py-2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              await handleAuthentication(values);
            }}
          >
            {({ errors, touched, values }) => (
              <Form
                autoComplete="off"
                className="auth-fields flex flex-col items-center gap-4 w-4/5 h-full justify-center"
              >
                <span className="font-semibold text-xl">JobSeeker.</span>
                <span className="text-lg">
                  {isSignup ? "Sign up" : "Sign in"}
                </span>
                {isSignup && (
                  <div className="w-full auth-fields flex flex-col gap-2">
                    <div className="w-full">
                      <Field as="select" name="role" className="input">
                        <option value="" label="Select role" />
                        <option value="user" label="User" />
                        <option value="employer" label="Employer" />
                      </Field>
                      {errors.role && touched.role && (
                        <div className="text-red-500">{errors.role}</div>
                      )}
                    </div>
                    <div className="w-full">
                      <Field
                        name="username"
                        type="text"
                        placeholder="Username"
                        className={`input ${
                          errors.username && touched.username
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {errors.username && touched.username && (
                        <div className="text-red-500">{errors.username}</div>
                      )}
                    </div>
                  </div>
                )}
                <div className="w-full">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`input ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="w-full">
                  <Field
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={`input ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </div>
                {isSignup && (
                  <div className="w-full">
                    <Field
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className={`input ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="text-red-500">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex flex-row justify-between flex-wrap w-full">
                  <div className="flex flex-row gap-2">
                    <Field type="checkbox" className="w-fit" />
                    <span>Remember me</span>
                  </div>
                  {!isSignup && (
                    <span className="text-prime cursor-pointer">
                      Forgot password?
                    </span>
                  )}
                </div>
                <Button
                  isSubmit
                  isPrimary={true}
                  text={isSignup ? "Sign up" : "Sign in"}
                  className="w-fit mx-auto"
                  disabled={isLoading}
                />
                {isLoading && <div className="text-gray-500">Loading...</div>}
                <span>Or join with</span>
                <div className="flex flex-row gap-4 items-center text-2xl cursor-pointer">
                  <FaGoogle />
                  <FaTwitter />
                  <FaFacebook />
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    {!isSignup ? "Not a member yet?" : "Already a member?"}
                  </span>
                  <span
                    className="text-prime cursor-pointer"
                    onClick={handleToggle}
                  >
                    {isSignup ? "Sign in!" : "Sign up!"}
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
