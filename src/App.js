import { ThemeProvider } from "@material-ui/core";
import { Main } from "./pages";
import { theme } from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
