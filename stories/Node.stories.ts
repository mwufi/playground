import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import JavascriptNode from '@/components/nodes/JavascriptNode';
import '@/app/globals.css'; // replace with the name of your tailwind css file

const meta = {
    title: 'Nodes/JavascriptNode',
    component: JavascriptNode,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};