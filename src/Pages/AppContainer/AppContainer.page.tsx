import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";
import { BiSearch } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avtar from "../../Components/Avtar/Avtar";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {}

const AppContainer: React.FC<Props> = (Props) => {
  return (
    <>
      <div className="bg-shine w-full px-4 pt-2 items-center flex justify-between">
        <div>
          <img
            className="w-8 h-8 inline"
            src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg"
            alt=""
          />
          <div className="hidden md:inline-block">
            <h1 className="font-bold text-white px-4 text-xl tracking-wide inline">
              CORK
            </h1>
          </div>
          <div className="hidden md:inline-block">
            <div className="text-gray-400 relative mx-12">
              <label className="sr-only">Search</label>
              <BiSearch className="absolute text-gray-400 text-xl top-1 left-2" />
              <input
                type="search"
                placeholder="Search.."
                className="bg-gray-800 w-80 pl-10 py-1 rounded-md text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-3 text-white text-2xl items-center">
          <img
            src="https://designreset.com/cork/ltr/demo4/assets/img/ca.png"
            alt="none"
            className="w-6 h-6"
          />
          <FiMail />
          <IoIosNotificationsOutline />
          <Avtar size={38} shape="square" className="rounded-md p-1" />
        </div>
      </div>
      <div className="bg-gray-100 relative">
        <GiHamburgerMenu className="text-2xl absolute top-2 left-4" />
        <p className="py-2 px-16 text-gray-700 text-base tracking-wide">
          <span className="text-gray-600 hidden sm:inline">Users / </span>{" "}
          Account Settings
        </p>
      </div>
      <div className="flex">
        <Sidebar className="hidden md:block"></Sidebar>
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/recordings">
            <RecordingsPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};
AppContainer.defaultProps = {};
export default AppContainer;
