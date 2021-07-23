import Alert from "./Alert";
import "../../index.css";

export default {
  title: "My Alert",
  component: "Alert",
};

const temp = (args: any) => {
  return(<Alert {...args}></Alert>);
};

export const main: any = temp.bind({});

main.args = {
};


