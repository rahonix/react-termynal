import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Termynal, Input, Plain } from ".";

export default {
    title: "ReactComponentLibrary/Termynal",
    component: Termynal,
} as ComponentMeta<typeof Termynal>;

const Template: ComponentStory<typeof Termynal> = (args) => <Termynal {...args} />
const ContainerTemplate: ComponentStory<any> = (args) => 
  <div style={{
    position: "relative",
    height: "200px"
  }}>
    <Termynal {...args} />
  </div>

export const basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
basic.args = {
  id: "container",
  children: 
  <>
    <Input content={"How are you doing?"}/>
  </>
  
};

export const container = ContainerTemplate.bind({});
container.args = {
  id: "container",
  children: 
  <>
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
    <Plain content={"Alot of text that is shown here"} />
  </>
  
};