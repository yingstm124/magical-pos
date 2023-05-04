import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const meta = {
    title: "Stories/InputField",
    component: InputField,
    tags: ["autodocs"],
} satisfies Meta<typeof InputField>

export default meta

type Story = StoryObj<typeof InputField>

export const Default: Story = {
    args: {
        label: 'test',
    }
}

export const EmailInvalid: Story = {
    args: {
        label: 'test email',
        type: 'email'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const emailInput = await canvas.getByLabelText('test email')
        await userEvent.click(emailInput)
        await userEvent.keyboard("ying@test")
    }
}
