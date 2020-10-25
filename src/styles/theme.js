import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#78c58d",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `'Noto Sans TC', sans-serif`,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: `linear-gradient(0deg, rgba(191, 160, 148,.5) 0%, rgba(233,232,223,1) 100%)`,
        },
      },
    },
  },
});
