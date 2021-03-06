import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import ToggleButton from "../../Components/ToggleButton";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { BiLoaderAlt } from "react-icons/bi";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();
  const myform = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(4),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: () => {
      console.log("form submittimg ", myform.values);
      setTimeout(() => {
        console.log("Form Submitted Successfull!");
        history.push("/login");
      }, 2000);
    },
  });
  return (
    <form
      className="flex flex-col justify-center 2xl:pt-10 flex-shrink-0 2xl:pb-3 py-3 h-full items-center flex-1 tracking-widem font-nunito"
      onSubmit={myform.handleSubmit}
    >
      <div className="h-full">
        <h1 className="text-4.5xl font-medium mb-2">
          Get started with a <br></br> free account
        </h1>
        <p className="text-sm font-bold mb-12">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-Primary border-b border-Primary">Log in</span>
          </Link>
        </p>
        <div className="relative pb-6 pt-3">
          <label className="absolute top-5">
            <svg
              className="stroke-current text-Primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#acc4fc"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </label>
          <Input
            id="username"
            type="usernsme"
            placeholder="Username"
            autoComplete="username"
            {...myform.getFieldProps("username")}
            error={myform.errors.username}
            touched={myform.touched.username}
          ></Input>
        </div>
        <div className="relative pb-6 pt-3">
          <label className="absolute top-5">
            <svg
              className="h-6 w-6 stroke-current text-Primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="#acc4fc"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </label>
          <Input
            id=""
            type="email"
            placeholder="Email"
            autoComplete="email"
            {...myform.getFieldProps("email")}
            error={myform.errors.email}
            touched={myform.touched.email}
          ></Input>
        </div>
        <div className="relative pb-6 pt-3 mb-2 ">
          <label className="absolute top-5">
            <svg
              className="stroke-current text-Primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#acc4fc"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="password"
            {...myform.getFieldProps("password")}
            error={myform.errors.password}
            touched={myform.touched.password}
          ></Input>
        </div>
        <div className="flex justify-start items-center text-sm space-x-3 mb-2 pb-3">
          <input type="checkbox" className="h-3.5 w-3.5"></input>
          <label className="text-gray-400 tracking-wider text-sm font-thin">
            I agree to the{" "}
            <span className="text-Primary"> terms and conditions </span>
          </label>
        </div>
        <div className="justify-between items-start sm:items-center flex flex-col sm:flex-row mb-14 space-y-4 sm:space-y-0">
          <div className="flex space-x-2">
            <h3 className="text-sm font-semibold">Show Password</h3>
            <ToggleButton></ToggleButton>
          </div>
          <div>
            <div className="flex space-x-2 items-center">
              <Button theme="primary">Get Started</Button>
              {myform.isSubmitting && (
                <BiLoaderAlt className="animate-spin"></BiLoaderAlt>
              )}
            </div>
          </div>
        </div>
        <p className="mt-24 text-sm text-center font-semibold text-gray-700">
          ?? 2020 All Rights Reserved. <span className="text-Primary">CORK</span>{" "}
          is a product of{" "}
        </p>
        <p className="text-sm text-center font-semibold text-gray-700">
          Designreset. <span className="text-Primary">Cookie Preferences</span>,{" "}
          <span className="text-Primary">Privacy</span>,{" "}
          <span className="text-Primary">Terms</span>.
        </p>
      </div>
    </form>
  );
};
Signup.defaultProps = {};
export default memo(Signup);
