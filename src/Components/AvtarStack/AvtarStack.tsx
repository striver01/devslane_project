import { FC, memo } from "react";
import pic from "./it1.jpg";

interface Props {
  stacksize: number;
}

const AvtarStack: FC<Props> = ({ stacksize }) => {
  let size = 0;
  let stack: string[] = [pic, pic, pic, pic];
  let val = [pic],
    show = true;
  if (stacksize > 4) {
    size = stacksize - 4;
    show = true;
    stacksize = 4;
  }
  if (stacksize <= 4) {
    val = stack.slice(0, stacksize);
    show = false;
  }

  return (
    <div className="relative flex">
      {val.map((res: string, key: number) => {
        return (
          <img
            className={`w-20 h-20 rounded-full border-2 border-white transform hover:-translate-y-2 duration-500`}
            src={res}
            alt="none"
          />
        );
      })}
      <p className="rounded-full border border-black text-center px-2 left-96 my-auto bg-white transform hover:-translate-y-2 duration-500">
        {size}+more
      </p>
    </div>
  );
};
AvtarStack.defaultProps = {
  stacksize: 4,
};
export default memo(AvtarStack);
