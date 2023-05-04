import { Meta, StoryObj } from "@storybook/react";
import OrderCard from "./OrderCard";
import { orders } from "../../Data/orders";

const meta = {
    title: "Stories/Order/OrderCard",
    component: OrderCard,
    tags: ["autodocs"],
} satisfies Meta<typeof OrderCard>

export default meta

type Story = StoryObj<typeof OrderCard>

export const Default: Story = {
    args: {
        orders: orders,
    }
}