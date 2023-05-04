import "./App.css";
import Pos from "./Pages/Pos";
import {
    CssBaseline,
    ThemeProvider,
} from "@mui/material";
import { theme } from "./myTheme";


function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Pos />
            </div>
        </ThemeProvider>
    );
}

export default App;
