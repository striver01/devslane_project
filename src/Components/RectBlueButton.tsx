import React from 'react';

interface Props{
 
}

 const RectBlueButton: React.FC<Props> = (props) => {
  return(
    <div className="bg-Primary text-white px-5 py-2 cursor-pointer rounded hover:shadow-none shadow-3xl text-sm">
      {props.children}
    </div>
  );
}
RectBlueButton.defaultProps = {}
export default RectBlueButton;