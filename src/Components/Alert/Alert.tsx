import { FC, memo } from "react";

interface Props {
  theme?: "danger" | "warning" | "primary" | "secondary" | "success";
  children?: string;
}

const Alert: FC<Props> = ({ children, theme, ...rest }) => {
  let themeClasses = "";
  let text = "";
  if (theme === "danger") {
    themeClasses = "bg-danger bg-opacity-10";
    text = "text-danger"
  }
  else if (theme === "primary") {
    themeClasses = "bg-Primary bg-opacity-10";
    text = "text-Primary";
  }
  else if (theme === "success") {
    themeClasses = "bg-success bg-opacity-10";
    text = "text-success";
  }
  else if (theme === "secondary") {
    themeClasses = "bg-secondary bg-opacity-10";
    text = "text-secondary";
  }
  else if (theme === "warning") {
    themeClasses = "bg-warning bg-opacity-10";
    text = "text-warning";
  }


return (
  <div className={"flex justify-between items-center px-5 py-2 rounded-md w-1/2 " + themeClasses}>
    <div className={"w-full " + text}>{children}</div>
    <svg
      className={"w-5 h-5 " + text}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
);
};
Alert.defaultProps = {
  theme: "primary",
};
export default memo(Alert);
