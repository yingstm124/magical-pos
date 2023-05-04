import { Meta, StoryObj } from "@storybook/react";
import MenuCard from "./MenuCard";

const meta = {
    title: 'Stories/MenuCard',
    component: MenuCard,
    tags: ['autodocs'],
} satisfies Meta<typeof MenuCard>

export default meta

type Story = StoryObj<typeof MenuCard>

export const Default : Story = {
    args: {
        name: 'book',
    }
}

export const Selected: Story = {
    args: {
        name: 'book',
        isSelected: true
    }
}