import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import DashboardPage from "./Dashboard.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings">
          <RecordingsPage></RecordingsPage>
        </Route>
      </Switch>
    </div>
  );
};
AppContainer.defaultProps = {};
export default AppContainer;
