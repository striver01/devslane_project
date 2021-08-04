import AvtarStack from "./AvtarStack";
import "../../index.css";

export default {
  title: "Avtar-Stack",
  component: "AvtarStack",  
  argTypes: {
    stacksize: { 
      control: { type: 'number', min: 1, max: 100, step: 1 },
    },
  },
};

const temp = (args: any) => {
  return(<AvtarStack {...args}></AvtarStack>);
};

export const main: any = temp.bind({});

main.args = {
};


