import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Paper } from "@mui/material";
import './App.css';
import Title from "./components/Title";
import MediumLoad from "./components/MediumLoad";
import LargeLoad from "./components/LargeLoad";
import ViewPromDashboard from "./components/ViewPromDashboard";
import WorkerDisplay from "./components/WorkerDisplay";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="main">
                <Title/>
                <WorkerDisplay/>
                <Paper classes={{root: "paper-override"}}>
                    <MediumLoad/>
                </Paper>

                <Paper classes={{root: "paper-override"}}>
                    <LargeLoad/>
                </Paper>

                <Paper classes={{root: "paper-override"}}>
                    <ViewPromDashboard/>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default App;
