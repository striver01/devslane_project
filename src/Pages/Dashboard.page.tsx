import {FC,memo} from 'react';

interface Props{
 
}

 const Dashboard: React.FC<Props> = (props) => {
  return(
    <div>
      This is Dashboard page.
    </div>
  );
}
Dashboard.defaultProps = {}
export default memo(Dashboard);