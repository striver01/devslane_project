import { FC, memo } from 'react';
import { Link } from "react-router-dom";
interface Props{
 
}

 const Signup: FC<Props> = (props) => {
  return(
    <div className="w-1/2 border-4 border-red-600">
      This is Signup page.
      Already have an account. <Link to="/login"><span className="text-blue-500">Click Here</span></Link>
      <Link to="/recordings"><span className="text-blue-500">Go to Dashboard</span></Link>
    </div>
  );
}
Signup.defaultProps = {}
export default memo(Signup);