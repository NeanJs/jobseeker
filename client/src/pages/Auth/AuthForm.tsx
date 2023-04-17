import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../../components/Button";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../reducers/Auth";
import { RootState } from "../../reducers/index";
import { handleSignin } from "../../actions/auth";

interface initialValues {
  email: string;
  password: string;
  fullname: string;
  confirmPassword: string;
}
function AuthForm() {
  const initialValues = {
    email: "",
    password: "",
    fullname: "",
    confirmPassword: "",
  } as initialValues;

  let dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleForm());
  };
  const { isSignup } = useSelector((state: RootState) => state.auth);

  let src = `https://images.pexels.com/photos/15828302/pexels-photo-15828302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full h-full text-xs md:text-base form-body flex flex-row md:w-[60vw] md:h-[60vh] mx-auto items-center shadow-lg">
        <div className="relative w-full h-full flex-[0.5]  items-center justify-center hidden md:flex">
          <img src={src} alt="" className=" object-cover h-full w-full" />
        </div>
        <div className="authform w-full h-full md:flex-[0.5] flex flex-col items-center justify-center gap-2 relative">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              //@ts-ignore
              dispatch(handleSignin(values));
            }}
          >
            <Form className="auth-fields flex flex-col items-center gap-4 w-4/5 h-full justify-center">
              <span className="font-semibold text-xl">JobSeeker.</span>
              <span className="text-lg ">
                {isSignup ? "Sign up" : "Sign in"}
              </span>
              {isSignup && (
                <Field name="name" type="text" placeholder="Fullname" />
              )}
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" placeholder="Password" name="password" />
              {isSignup && (
                <Field
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
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
                isPrimary
                text={isSignup ? "Sign up" : "Sign in"}
                className="w-fit mx-auto"
              />
              <span>Or join with</span>
              <div className="flex flex-row gap-4 items-center text-2xl cursor-pointer">
                <FaGoogle />
                <FaTwitter />
                <FaFacebook />
              </div>{" "}
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
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
