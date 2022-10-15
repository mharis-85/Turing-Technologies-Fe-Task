import { createTheme, ThemeOptions } from "@mui/material"

export const themeColor = {
  primary: {
    main: "#0106e4",
    light: "#151af8",
    dark: "#0000c6",
    50: "#3338ff",
    100: "#292eff",
    200: "#1f24ff",
    300: "#151af8",
    400: "#0b10ee",
    500: "#0106e4",
    600: "#0000da",
    700: "#0000d0",
    800: "#0000c6",
    900: "#0000bc",
  },
}

export const theme: ThemeOptions = createTheme({
  palette: themeColor,
  typography: {
    fontSize: 14,
    fontFamily: [
      "AvenirLTStd",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "none", borderWidth: "2px", padding: "1rem" },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontSize: "inherit" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        adornedStart: { paddingLeft: ".5rem !important", "& svg": { marginRight: ".25rem" } },
        adornedEnd: { paddingRight: ".5rem !important", "& svg": { marginLeft: ".25rem" } },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          minWidth: "unset",
          textTransform: "inherit",
          boxShadow: "none",
          ":hover": { boxShadow: "none" },
        },
      },
    },
  },
} as ThemeOptions)
