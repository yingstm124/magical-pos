import { Meta, StoryObj } from "@storybook/react";
import Order from "./Order";
import ExampleProduct from '../assets/products/book/1.png'

const meta = {
    title: "Stories/Order/Order",
    component: Order,
    tags: ["autodocs"]
} satisfies Meta<typeof Order>

export default meta

type Story = StoryObj<typeof Order>

export const Default: Story = {
    args: {
        image: ExampleProduct,
        name: "Minallima",
        price: 11,
        amouth: 1
    }
}