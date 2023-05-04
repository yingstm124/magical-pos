import { createTheme } from "@mui/material";

const palette = {
    primary: {
        main: "#b9a66d",
        light: "#d7ccab",
        dark: "#9b802e",
    },
    secondary: {
        main: "#9b4d2e",
        light: "#b9826d",
        dark: "#5d2e1c",
    },
    background: {
        default: "#282827",
        paper: "#3e3e3d",
    },
    common: {
        black: "#20201f",
        white: "#fffcf4",
        highlight: "#773e86",
        price: "#53aa0b",
        sold: "#FD1A1A"
    }
}

export const theme = createTheme({
    palette: palette,
    typography: {
        allVariants: {
            color: palette.primary.light,
        },
    },
    
});