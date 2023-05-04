import type { StorybookConfig } from "@storybook/react-webpack5";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // default addon
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@storybook/addon-docs"
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
    },

  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;
