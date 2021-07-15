import React from 'react';

interface Props{
 
}

 const NotFound: React.FC<Props> = (props) => {
  return(
    <div className="bg-green-300 h-screen">
      Sorry, The Page doesn't exist.
    </div>
  );
}
NotFound.defaultProps = {}
export default NotFound;