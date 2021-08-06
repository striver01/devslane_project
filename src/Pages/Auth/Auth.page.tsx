import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../Components/AuthHero";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {}

const Auth: FC<Props> = (props) => {
  return (
    <div className="flex justify-between min-h-screen">
      <Switch>
        <Route path="/login" exact>
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup" exact>
          <SignupPage></SignupPage>
        </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};
Auth.defaultProps = {};
export default memo(Auth);
