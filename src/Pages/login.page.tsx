import React from "react";
import { Link } from "react-router-dom";
import AuthHero from "../Components/AuthHero";

interface Props {}

const Login: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
      <div>
        This is Login page. Don't have an account. Click Here :{" "}
        <Link to="/signup">
          <span className="text-blue-500">Click Here</span>
        </Link>
      </div>
      <AuthHero></AuthHero>
    </div>
  );
};
Login.defaultProps = {};
export default Login;
