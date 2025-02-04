import { useState, useEffect } from "react";
import {
  BiBell,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiMessage,
} from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import Button from "./Button";
import { logout } from "../reducers/Auth";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [fixed, setFixed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, data, role } = useSelector(
    (state: RootState) => state.auth
  );

  // Handle Logout
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  // Handle Register (for Employers)
  const handleRegister = () => {
    navigate("/post-job");
  };

  // Handle scroll for fixed navbar
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
  }, [window.scrollY]);

  // Toggle the user menu visibility
  const userToggle = () => {
    setShow(!show);
    setToggle(false);
  };

  // Toggle the navbar menu visibility
  const handleToggle = () => {
    setToggle(!toggle);
    setShow(false);
  };

  // Role-based navigation links
  const roleLinks = {
    user: [
      { title: "Home", path: "/" },
      { title: "Jobs", path: "/jobs" },
      { title: "Companies", path: "/companies" },
      { title: "Career Tips", path: "/career-tips" },
    ],
    employer: [
      { title: "Dashboard", path: "/dashboard" },
      { title: "Post a Job", path: "/post-job" },
      { title: "Manage Jobs", path: "/manage-jobs" },
    ],
    admin: [
      { title: "Admin Dashboard", path: "/admin-dashboard" },
      { title: "User Management", path: "/admin-users" },
      { title: "Job Listings Management", path: "/admin-jobs" },
    ],
  };

  // Get the links based on the user's role
  const links = roleLinks[role] || [];

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

        {/* Navbar links */}
        <div
          className={`navbar ${
            toggle ? "slide" : ""
          } absolute p-4 top-[100%] drop-shadow-md text-base rounded-md bg-white  lg:shadow-none lg:bg-transparent lg:relative flex flex-col items-start gap-4 lg:translate-x-0 lg:translate-y-0 lg:gap-0 lg:items-center lg:flex-row`}
        >
          <ul className="navlinks flex flex-col w-full mx-auto gap-2 lg:justify-center lg:gap-8 lg:flex-row">
            {links.map((link, id) => (
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

        {/* User menu (Avatar + name) */}
        <div
          className="user-section flex gap-2 items-center"
          onClick={userToggle}
        >
          <RxAvatar />
          <span className="text-sm">{data.user.username}</span>
        </div>

        {/* User menu options */}
        <div
          className={`${
            show ? "" : "slide"
          } absolute top-[100%] -right-0 duration-300 p-2 flex flex-col items-start gap-2 text-sm w-fit bg-white shadow-lg`}
        >
          <span className="duration-300 ease hover:text-prime">
            Manage account
          </span>
          {role === "employer" && (
            <Button
              text="Post a job"
              onClick={handleRegister}
              isPrimary
              className="w-full"
            />
          )}
          <Button text="Logout" onClick={handleLogout} className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
