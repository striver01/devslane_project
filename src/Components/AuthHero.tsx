import React from 'react';
import { useEffect } from 'react';

interface Props{
 
}

 const AuthHero: React.FC<Props> = (props) => {
     console.log("AuthHero Rendering");
     useEffect(() => {
        console.log("AuthHero Rendering for the first time");
     },[]);
  return(
    <div className="h-screen w-1/2 bg-black text-white">
      Logo will go Here.
    </div>
  );
}
AuthHero.defaultProps = {}
export default AuthHero;