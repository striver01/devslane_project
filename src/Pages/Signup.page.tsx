import {FC,memo} from 'react';

interface Props{
 
}

 const Signup: React.FC<Props> = (props) => {
  return(
    <div>
      This is Signup page.
    </div>
  );
}
Signup.defaultProps = {}
export default memo(Signup);