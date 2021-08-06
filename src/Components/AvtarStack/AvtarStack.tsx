import { FC, memo } from "react";
import pic from "./it1.jpg";

interface Props {
  stacksize: number;
}

const AvtarStack: FC<Props> = ({ stacksize }) => {
  let size = 0;
  let stack: string[] = [pic, pic, pic, pic];
  let val = [pic];
  if (stacksize > 4) {
    size = stacksize - 4;
    stacksize = 4;
  }
  val = stack.slice(0, stacksize);

  return (
    <div className="flex">
      {val.map((res: string, key: number) => {
        return (
          <div className="-space-x-2">
            <img
              className={`inline w-20 h-20 rounded-full border-2  border-white transform hover:-translate-y-2 duration-500 relative right-${
                key * 4
              }`}
              src={res}
              alt="none"
            />
          </div>
        );
      })}
      <p
        className={`rounded-full border border-black text-center px-2 my-auto bg-white transform hover:-translate-y-2 duration-500 relative right-${
          stacksize * 4
        }`}
      >
        {size}+more
      </p>
    </div>
  );
};
AvtarStack.defaultProps = {
  stacksize: 4,
};
export default memo(AvtarStack);
