import { FC, memo, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { useHistory } from "react-router-dom";

interface Props {
  isSubmitting?: boolean;
  pass?: string;
  email?: string;
  data?: object;
  className?: string;
  children?: string;
}

const RectBlueButton: FC<Props> = ({
  isSubmitting,
  data,
  children,
  className,
  email,
  pass,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();
  return (
    <div className="space-x-2">
      <button
        onClick={(event) => {
          event.preventDefault();
          if (!isSubmitting || (email!=="" && pass!=="")) {
            console.log("Submission Failed! Please try again.");
            return;
          }
          setSubmitting(true);
          setTimeout(() => {
            console.log(data);
            history.push("/dashboard");
          }, 2000);
        }}
        // className={className}
        type="submit"
        className={"bg-Primary text-white px-5 py-2 inline cursor-pointer rounded hover:shadow-none shadow-3xl text-sm" + className}
      >
        {children}
      </button>
      {submitting && (
        <FiLoader className="inline animate-spin opacity-70"></FiLoader>
      )}
    </div>
  );
};
RectBlueButton.defaultProps = {};
export default memo(RectBlueButton);
