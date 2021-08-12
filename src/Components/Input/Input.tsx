import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  touched?: boolean;
  error?: string;
  className?: string;
}

const Input: FC<Props> = ({
  id,
  className,
  touched,
  error,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        placeholder={placeholder}
        id={id}
        {...rest}
        className={
          "W-97 text-base font-semibold focus:border-Primary text-gray-900 px-9 pb-2.5 pt-2.5 outline-none border-b border-gray-300 placeholder-gray-300 placeholder-opacity-100 " +
          className
        }
      ></input>
      {/* {console.log('error' ,error)} */}
      {touched && <div className="text-red-500  text-sm">{error}</div>}
    </>
  );
};
Input.defaultProps = {};
export default memo(Input);
