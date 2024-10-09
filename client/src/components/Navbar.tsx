//@ts-ignore
import { LINKS } from "../constants/constants";
import Button from "./Button";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BiBell,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiMessage,
} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { RxAvatar } from "react-icons/rx";
import { logout } from "../reducers/Auth";
function Navbar() {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  let dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleRegister = () => {};
  const navigation = document.querySelector(".navigation");
  const userToggle = () => {
    if (!toggle) {
      setToggle(true);
    }
    setShow(!show);
  };
  const handleToggle = () => {
    if (show) {
      setShow(false);
    }
    setToggle(!toggle);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
  }, [window.scrollY]);
  const { isLoggedIn, data } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`${
        fixed
          ? "fixed bg-global rounded-full lg:justify-around top-4 px-4 shadow-lg h-[10vh] md:w-4/5 md:mx-auto"
          : "relative"
      }  w-full py-8 flex justify-between items-center navigation ease duration-300`}
    >
      <Link
        to={`/`}
        className="logo text-sm md:text-xl md:flex-1 font-semibold"
      >
        Job Seeker.
      </Link>
      <div className="flex items-center z-10 text-3xl gap-4 cursor-pointer">
        <span
          onClick={handleToggle}
          className="toggler lg:hidden bg-white grid place-items-center drop-shadow-lg w-10 h-10 rounded-full"
        >
          {toggle ? <BiMenuAltLeft /> : <BiMenuAltRight />}
        </span>
        <div
          className={`navbar ${
            toggle ? "slide" : ""
          } absolute p-4 top-[100%] drop-shadow-md text-base rounded-md bg-white  lg:shadow-none lg:bg-transparent lg:relative flex flex-col items-start gap-4 lg:translate-x-0 lg:translate-y-0 lg:gap-0 lg:items-center lg:flex-row`}
        >
          <ul className="navlinks flex flex-col w-full mx-auto gap-2 lg:justify-center lg:gap-8 lg:flex-row ">
            {LINKS.map((link: { title: string; path: string }, id: number) => (
              <Link
                to={link.path}
                key={`${link.title}-${id}`}
                className="link hover:text-prime ease duration-300 cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <BiBell />
        <BiMessage />
        <div
          className="user-section flex gap-2 items-center"
          onClick={userToggle}
        >
          <RxAvatar className="" />
          <span className="text-sm">{data.user.username}</span>
        </div>
        <div
          className={`${
            show ? "" : "slide"
          } absolute top-[100%] -right-0 duration-300 p-2 flex flex-col items-start gap-2 text-sm w-fit bg-white shadow-lg`}
        >
          <span className="duration-300 ease hover:text-prime">
            Manage account
          </span>
          <Button
            text="Post a job"
            onClick={handleRegister}
            isPrimary
            className="w-full"
          />

          <Button text="Logout" onClick={handleLogout} className="w-full" />
        </div>
      </div>

      {/* <div className="btn-container flex gap-1 lg:flex-[0.2] lg:justify-between items-center"> */}
      {/* <Button
          text="Post a job"
          onClick={handleRegister}
          isPrimary
          className="w-full"
        />
      {/* </div> */}
    </div>
  );
}

export default Navbar;
