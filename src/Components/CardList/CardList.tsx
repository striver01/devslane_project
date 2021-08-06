import { FC, memo } from "react";

interface Props {
  description?: string;
  link?: string;
  key?: number;
  children?: string;
}

const CardList: FC<Props> = ({ description, link, children, ...rest }) => {
  return (
    <div className="bg-white hover:bg-gray-400 flex space-x-8 border-2 rounded-2xl px-5 py-2 cursor-pointer">
      <img className="rounded-full w-16 h-16" src={link} alt="None" />
      <div>
        <h1 className="text-lg">{children}</h1>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};
CardList.defaultProps = {};
export default memo(CardList);
