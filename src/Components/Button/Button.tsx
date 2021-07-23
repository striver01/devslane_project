import { FC, memo, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  base?: "solid" | "outline";
  theme?: "primary" | "success" | "secondary" | "warning" | "danger";
  className?: string;
}

const Button: FC<Props> = ({ children, className, theme, base, ...rest }) => {
  let themeClasses = "";
  if (base === "solid") {
    if (theme === "primary")
      themeClasses = "bg-Primary text-white hover:shadow-none shadow-Primary";
    else if (theme === "success")
      themeClasses = "bg-success text-white hover:shadow-none shadow-success";
    else if (theme === "secondary")
      themeClasses =
        "bg-secondary text-white hover:shadow-none shadow-secondary";
    else if (theme === "warning")
      themeClasses = "bg-warning text-white hover:shadow-none shadow-warning";
    else if (theme === "danger")
      themeClasses = "bg-danger text-white hover:shadow-none shadow-danger";
  } else if (base === "outline") {
    if (theme === "primary")
      themeClasses =
        "border-2 border-Primary text-Primary hover:shadow-none shadow-Primary";
    else if (theme === "success")
      themeClasses =
        "border-2 border-success text-success hover:shadow-none shadow-success";
    else if (theme === "secondary")
      themeClasses =
        "border-2 border-secondary text-secondary hover:shadow-none shadow-secondary";
    else if (theme === "warning")
      themeClasses =
        "border-2 border-warning text-warning hover:shadow-none shadow-warning";
    else if (theme === "danger")
      themeClasses =
        "border-2 border-danger text-danger hover:shadow-none shadow-danger";
  }

  return (
    <div className="space-x-2">
      <button
        {...rest}
        className={
          "px-5 py-2 font-medium cursor-pointer rounded  text-sm " +
          themeClasses +
          " " +
          className
        }
      >
        {children}
      </button>
    </div>
  );
};
Button.defaultProps = {
  theme: "primary",
  base: "solid",
  type: "submit",
};
export default memo(Button);
