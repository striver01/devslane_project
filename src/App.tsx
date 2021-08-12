import { Suspense, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_Auth_Token } from "./Api/base";
import NotFound from "./Components/NotFound.page";
import { ImSpinner9 } from "react-icons/im";
import AuthLazy from "./Pages/Auth/Auth.Lazy";
import AppContainerLazy from "./Pages/AppContainer/AppContainer.Lazy";
import { useEffect } from "react";
import { me } from "./Api/auth";
import { User } from "./Models/User";
import AppContext from "./App.context";
import { useMemo } from "react";

function App() {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_Auth_Token);
  console.log("App Rendering and token is ", token);
  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => setUser(u));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const data = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  if (!user && token) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider value={data}>
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
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>
            <Route path={["/dashboard", "/recordings"]} exact>
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </AppContext.Provider>
  );
}

export default App;
