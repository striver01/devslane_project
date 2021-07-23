import Input from "./Input";

export default{
    title: "Form Input",
    component: Input,
}

const defaultInput = (args: any) => <Input {...args}/>;

export const main: any = defaultInput.bind({});
main.args={
    className: "",
    placeholder: "",
    id: ""
}; 