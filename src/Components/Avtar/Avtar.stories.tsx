import Avtar from "./Avtar";
import "../../index.css";

export default {
  title: "Profile Avtar",
  component: "Avtar",
  argTypes: {
    shape: {
      options: ["square", "circle"],
      control: { type: "radio" },
    },
    size:{
        options: {
            min: 50,
            max: 200,
            step: 1,
        },
        control: {type: 'range'},
    },
  },
};

const temp = (args: any) => {
  return <Avtar {...args}></Avtar>;
};

export const main: any = temp.bind({});

main.args = {};
