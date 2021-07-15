import React from "react";
import { Link } from "react-router-dom";
import RectBlueButton from "../Components/RectBlueButton";
import ToggleButton from "../Components/ToggleButton";

interface Props {}

const Login: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-1/2 tracking-widem font-nunito">
      <div>
        <h1 className="text-4.5xl font-medium mb-2">
          Log In to <span className="text-Primary font-semibold">CORK</span>
        </h1>
        <p className="text-sm font-bold mb-12">
          New Here?{" "}
          <Link to="/signup">
            <span className="text-Primary border-b border-Primary">
              Create an account
            </span>
          </Link>
        </p>
        <div className="relative pb-6 pt-3">
          <label className="absolute">
            <svg
              className="stroke-current text-Primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#acc4fc"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </label>
          <input
            type="email"
            placeholder="Email"
            autoComplete=""
            className="w-97 text-base font-semibold text-gray-900 px-9 pb-2.5 outline-none border-b border-gray-300 placeholder-gray-300 placeholder-opacity-100"
          ></input>
        </div>
        <div className="relative pb-6 pt-3 mb-2 ">
          <label className="absolute">
            <svg
              className="stroke-current text-Primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#acc4fc"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </label>
          <input
            placeholder="Password"
            className="w-97 text-base font-semibold text-gray-900 px-9 pb-2.5 border-b-2 outline-none placeholder-gray-300 placeholder-opacity-100"
          ></input>
        </div>
        <div className="justify-between items-center flex mb-14">
          <div className="flex space-x-2">
            <h3 className="text-sm font-semibold">Show Password</h3>
            <ToggleButton></ToggleButton>
          </div>
          <RectBlueButton>Log In</RectBlueButton>
        </div>
        <div className="flex justify-center items-center text-sm space-x-2 mb-2">
          <input type="checkbox" className="h-3.5 w-3."></input>
          <label className="text-gray-400 text-sm font-thin">
            Keep me Logged In
          </label>
        </div>
        <p className="text-Primary text-3.75 font-bold text-center mt-4">
          Forgot Password?
        </p>
        <p className="mt-24 text-sm text-center font-semibold text-gray-700">
          © 2020 All Rights Reserved. <span className="text-Primary">CORK</span>{" "}
          is a product of{" "}
        </p>
        <p className="text-sm text-center font-semibold text-gray-700">
          Designreset. <span className="text-Primary">Cookie Preferences</span>,{" "}
          <span className="text-Primary">Privacy</span>,{" "}
          <span className="text-Primary">Terms</span>.
        </p>
      </div>
    </div>
  );
};
Login.defaultProps = {};
export default Login;
