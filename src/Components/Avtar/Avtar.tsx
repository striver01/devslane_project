import {FC,memo} from 'react';
import it from './it1.jpg';

interface Props{
  shape?: 'square' | 'circle';
  isOnline?: boolean;
  size?: number;
}

 const Avtar: FC<Props> = ({shape,size,isOnline,...rest}) => {

  let shapeClass = shape==='circle'?'rounded-full':'rounded-none';
  let online = isOnline ?'bg-green-500':'bg-gray-300';

  return(
    <div className="relative" style={{width:`${size}px` , height: `${size}px`}}>
      <img src={it} className={`${shapeClass}`} alt="none" />
      <div className={`absolute ${online} w-1/4 h-1/4  rounded-full bottom-2 border-2 border-white right-1 `}></div>
    </div>
  );
}
Avtar.defaultProps = {
  shape: "circle",
  isOnline: false,
}
export default memo(Avtar);