import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_Auth_Token } from "./Api/base";
import NotFound from "./Components/NotFound.page";
import { ImSpinner9 } from "react-icons/im";
import AuthPageLazy from "./Pages/Auth/Auth.Lazy";
import AppContainerLazy from "./Pages/AppContainer/AppContainer.Lazy";

function App() {
  const token = localStorage.getItem(LS_Auth_Token);
  console.log("App Rendering and token is ", token);
  return (
    <Suspense
      fallback={
        <div className="animate-spin duration-700 w-full h-screen flex justify-center items-center">
          <ImSpinner9 className="w-20 h-20" />
        </div>
      }
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPageLazy />
          </Route>
          <Route path={["/dashboard", "/recordings"]} exact>
            <AppContainerLazy />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
