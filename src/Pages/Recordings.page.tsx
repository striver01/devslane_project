import {FC,memo} from 'react';

interface Props{
 
}

 const Recordings: React.FC<Props> = (props) => {
  return(
    <div>
      This is Recordings page.
    </div>
  );
}
Recordings.defaultProps = {}
export default memo(Recordings);