import React from 'react';

interface Props{
 
}

 const Sidebar: React.FC<Props> = (props) => {
  return(
    <div className="h-screen w-80 bg-gray-300 text-gray-900">
      This is the sidebar.
    </div>
  );
}
Sidebar.defaultProps = {}
export default Sidebar;