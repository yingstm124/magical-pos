import { Meta, StoryObj } from "@storybook/react";
import Receipt from "./Receipt";

const meta = {
    title: "Stories/ReceiptDialog",
    component: Receipt,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "demo component description",
            },
        },
    },
    argTypes: {
        paymentType: {
            name: "payment type",
            require: true,
            description: "demo description",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "cash" },
            },
        },
    },
} satisfies Meta<typeof Receipt>;

export default meta;

type Story = StoryObj<typeof Receipt>;

export const Cash: Story = {
    args: {
        paymentType: "cash",
    },
    parameters: {
        docs: {
            description: {
                story: "Reciept by cash",
            },
        },
    },
};
export const Card: Story = {
    args: {
        paymentType: "card",
    },
};
export const Ewallet: Story = {
    args: {
        paymentType: "e-wallet",
    },
};
