import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./ProductCard";
import ExampleProduct from '../assets/products/book/1.png'

const meta = {
    title: "Stories/ProductCard",
    component: ProductCard,
    tags: ["autodocs"],
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        image: ExampleProduct,
        name: "Book",
        price: 10,
    },
};

export const Recommend: Story = {
    args: {
        image: ExampleProduct,
        name: "Book",
        price: 10,
        recommend: true,
    },
};

export const Sold: Story = {
    args: {
        image: ExampleProduct,
        name: "Book",
        price: 10,
        sold: true,
    },
};