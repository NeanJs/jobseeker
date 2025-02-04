import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Celebrate from "../assets/celebrate.svg";
import { useDispatch, useSelector } from "react-redux";
import { authSuccess } from "../reducers/Auth";
import { RootState } from "../reducers";
import { useEffect } from "react";

export function Redirect() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="redirect w-full grid place-items-center h-screen">
      <div className="flex flex-col items-center justify-center gap-2 text-lg">
        {/* <MdVerified className="w-20 h-20" /> */}
        <img src={Celebrate} className="w-96" />
        <span className="text-center">
          Welcome aboard! 🎉 <br />
          Your account has been successfully created. <br />
          Let’s get started!
        </span>
        <Button
          text={"Continue to app"}
          isPrimary
          onClick={async () => {
            await dispatch(authSuccess(state));
            navigate("/");
            localStorage.setItem("token", state.token);
          }}
        />
      </div>
    </div>
  );
}
