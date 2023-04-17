import { LINKS } from "../constants/constants";
import Button from "./Button";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { RxAvatar } from "react-icons/rx";
function Navbar() {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const handleSignIn = () => {};
  const handleRegister = () => {};
  const navbar = document.querySelector(".navbar");
  const navigation = document.querySelector(".navigation");
  const userToggle = () => {};
  const handleToggle = () => {
    setToggle(!toggle);
    navbar?.classList.toggle("slide");
  };
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY > 100) {
  //       navigation?.classList.replace("relative","fixed");
  //     } else {
  //       navigation?.classList.replace("fixed", "relative");
  //     }
  //   };
  // }, [window.scrollY]);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full h-full py-8 flex justify-between items-center navigation">
      <Link to={`/`} className="logo flex-1  md:flex-[0.2] font-semibold">
        Job Seeker.
      </Link>
      <span
        className="flex lg:hidden z-10 text-2xl cursor-pointer"
        onClick={handleToggle}
      >
        <span className="toggler bg-white grid place-items-center drop-shadow-lg w-10 h-10 rounded-full">
          {!toggle ? <BiMenuAltLeft /> : <BiMenuAltRight />}
        </span>
      </span>
      <div className="navbar absolute p-4 right-0 top-[0%] translate-y-5 -translate-x-5 drop-shadow-md rounded-md bg-white  lg:shadow-none lg:bg-transparent lg:relative flex flex-col flex-[0.8] items-start gap-4 lg:translate-x-0 lg:translate-y-0 lg:gap-0 lg:items-center lg:flex-row">
        <ul className="navlinks flex flex-col gap-4 lg:justify-center lg:gap-8  lg:flex-[0.75] lg:flex-row ">
          {LINKS.map((link, id) => (
            <Link
              to={link.path}
              key={`${link.title}-${id}`}
              className="link hover:text-prime ease duration-300 cursor-pointer"
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className=" btn-container flex gap-2 lg:flex-[0.25] lg:justify-between items-center">
          <Button text="Find a job" onClick={handleSignIn} className="w-full" />
          <Button
            text="Post a job"
            onClick={handleRegister}
            isPrimary
            className="w-full"
          />
          <div className="avatar flex text-4xl" onClick={userToggle}>
            <RxAvatar />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
