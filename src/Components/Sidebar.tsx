import React from "react";
import { logout } from "../api";
import Button from "./Button/Button";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className="h-screen w-80 bg-gray-300 text-gray-900 space-y-10 px-5">
      <p>This is the sidebar.</p>
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
