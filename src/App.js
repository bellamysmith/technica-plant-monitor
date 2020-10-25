import { ThemeProvider } from "@material-ui/core";
import { Main } from "./pages";
import { theme } from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
