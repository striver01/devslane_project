import Progress from "./ProgressBar";
import "../../index.css";

export default {
  title: "ProgressBar",
  component: "Progress",
  argTypes: {
        progress:{
            options: {
                min: 0,
                max: 200,
                step: 5,
            },
            control: {type: 'range'},
        },
        themeType:{
            options: ['simple','gradient'],
            control: {type: 'radio'},
        },
    },
};

const temp = (args: any) => {
  return(<Progress {...args}></Progress>);
};

export const main: any = temp.bind({});

main.args = {

};


