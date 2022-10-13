import { TextInput, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from "phosphor-react";

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [

      <TextInput.Icon> 
        <Envelope/>
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your best e-mail adress" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WithOutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your best e-mail adress"/>
  }
}

