import React from "react";
import { useContext } from "react";
import { logout } from "../Api/auth";
import AppContext from "../App.context";
import Button from "./Button/Button";

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = (Props) => {
  const { user } = useContext(AppContext);

  return (
    <div
      className={
        "h-screen w-1/5 bg-gray-300 text-gray-900 space-y-10 px-5 " +
        Props.className
      }
    >
      <p>This is the sidebar.</p>
      <h1>{user?.first_name! + user?.middle_name + user?.last_name}</h1>
      <Button
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </Button>
    </div>
  );
};
Sidebar.defaultProps = {};
export default Sidebar;
