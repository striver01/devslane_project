import Alert from "./Alert";
import "../../index.css";

export default {
  title: "My Alert",
  component: "Alert",
  argTypes: {
    theme: {
      options: ["primary", "secondary", "warning", "danger", "success"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
};

const temp = (args: any) => {
  return(<Alert {...args}></Alert>);
};

export const main: any = temp.bind({});

main.args = {
  children: "Primary! Lorem ipsum is dummy text of printing",
};


