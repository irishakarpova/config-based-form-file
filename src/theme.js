import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#C0C3C6",
      main: "#2A3743",
      dark: "#404E5C"
    },
    secondary: {
      main: "#C69A50",
      light: "#fafafa"
    },
    text: {
      primary: "#2A3743",
      secondary: "#93969a"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  overrides: {
    MuiInputBase: {
      input: {
        background: "#fff"
      }
    },
    MuiFormHelperText: {
      contained: {
        position: "absolute",
        display: "block",
        marginTop: 39,
        marginLeft: 18,
        padding: "0 2px",
        textAlign: "right",
        background: "#fff",
        zIndex: 100
      },
      root: {
        lineHeight: 0.9,
        letterSpacing: 0
      }
    },

    MuiOutlinedInput: {
      input: {
        padding: 14
      }
    },

    MuiInputLabel: {
      root: {
        background: "#fff",
        borderRadius: 0,
        "&$focused": {
          background: "#FAFAFA",
          padding: "0px 6px 0px 6px",
          borderRadius: 2
        }
      },
      outlined: {
        transform: "translate(20px, 16px) scale(1)"
      }
    }
  },
  typography: {
    body2: {
      color: "#C0C3C6"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 596,
      md: 850,
      lg: 950,
      xl: 1400
    }
  }
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem"
  }
};

export default theme;
