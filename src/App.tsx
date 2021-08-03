import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_Login_Token } from "./api";
import NotFound from "./Components/NotFound.page";
import AppContainer from "./Pages/AppContainer";
import AuthPage from "./Pages/Auth.page";

function App() {
  const token = localStorage.getItem(LS_Login_Token);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/login"></Redirect>}
        </Route>
        <Route path={["/login", "/signup"]} exact>
          <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard", "/recordings"]} exact>
          <AppContainer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
