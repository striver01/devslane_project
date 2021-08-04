import CardList from "./CardList";
import "../../index.css";

export default {
  title: "Api Card",
  component: "CardList",
//   argTypes: {
//     shape: {
//       options: ["square", "circle"],
//       control: { type: "radio" },
//     },
//     size:{
//         options: {
//             min: 50,
//             max: 200,
//             step: 1,
//         },
//         control: {type: 'range'},
//     },
//   },
};

const temp = (args: any) => {
  return(<CardList {...args}></CardList>);
};

export const main: any = temp.bind({});

main.args = {
    description: "",
    link: "",
    children: "",

};


