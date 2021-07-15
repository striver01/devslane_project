import { FC,memo } from 'react';
import { Link } from 'react-router-dom';

interface Props{
 
}

 const Dashboard : FC<Props> = (props) => {
  return(
    <div>
      This is Dashboard page.
      <Link to="/recordings"><span className="text-blue-500">Go to Recordings</span></Link>
      <Link to="/login"><span className="text-blue-500">Sign in</span></Link>
    </div>
  );
}
Dashboard.defaultProps = {}
export default memo(Dashboard);