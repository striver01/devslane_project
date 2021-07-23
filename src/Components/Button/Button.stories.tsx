import Button from "./Button";
import "../../index.css";

const Xyz = {
  title: "My Button",
  component: "Button",
  argTypes: {
    theme: {
      options: ["primary", "secondary", "warning", "danger", "success"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
    base: {
      options: ["solid", "outline"],
      control: { type: "radio" },
    },
  },
};
const temp = (args: any) => {
  return <Button {...args}></Button>;
};

export const main: any = temp.bind({});
main.args = {
  children: "Sign In",
  className: "",
};

export default Xyz;
