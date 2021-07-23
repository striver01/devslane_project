import { FC, memo } from "react";
import { number } from "yup/lib/locale";

interface Props {
  progress?: number;
  themeType?: "simple" | "gradient";
}

const ProgressBar: FC<Props> = ({ progress, themeType, ...rest }) => {
  let themeClasses =
    themeType === "simple"
      ? "bg-Primary"
      : "from-Primary to-green-500 bg-gradient-to-r";

  return (
    <div className="w-full rounded-full bg-gray-400 bg-opacity-10">
      <div
        style={{ width: `${progress}%` }}
        className={`rounded-full text-white text-sm font-semibold flex justify-center  ${themeClasses}`}
      >
        {progress}%
      </div>
    </div>
  );
};
ProgressBar.defaultProps = {
  progress: 50,
  themeType: "simple",
};
export default memo(ProgressBar);
