import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import {
    Title,
    Subtitle,
    Description,
    Primary,
    Controls,
    Stories,
} from "@storybook/blocks";

import React from "react";
import { theme } from "../src/myTheme";

export const withMuiTheme = (Story) => (
    <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
    </MUIThemeProvider>
);

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            ),
        },
    },
};

export const decorators = [withMuiTheme];

export default preview;
