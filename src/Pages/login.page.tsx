import {FC,memo} from 'react';

interface Props{
 
}

 const login: React.FC<Props> = (props) => {
  return(
    <div>
      This is Login page.
    </div>
  );
}
login.defaultProps = {}
export default memo(login);