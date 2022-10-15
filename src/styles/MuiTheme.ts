import { createTheme, ThemeOptions as MuiThemeOptions } from "@mui/material"

export interface ThemeOptions extends MuiThemeOptions {
  components?: MuiThemeOptions["components"] & {
    MuiSelect?: {
      styleOverrides?: {
        root?: Record<string, any>
      }
    }
  }
}

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
    MuiInputBase: {
      styleOverrides: {
        inputSizeSmall: { paddingTop: ".25rem !important", paddingBottom: ".25rem !important" },
        input: { paddingTop: ".7rem !important", paddingBottom: ".7rem !important" },
        adornedStart: { paddingLeft: ".5rem !important", "& svg": { marginRight: ".25rem" } },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: { paddingTop: "0 !important", paddingBottom: "0 !important" },
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
    MuiChip: {
      styleOverrides: {
        sizeSmall: { background: "transparent" },
        colorPrimary: { background: themeColor?.primary.main },
      },
    },
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
    MuiSelect: {
      styleOverrides: {
        root: {
          "&::before,&::after": { content: "none" },
          background: "transparent",
          "&:hover": {
            background: "transparent",
          },
        },
        filled: {
          backgroundColor: "#f3f6f9",
          margin: "0px -1px",
          border: "1px solid #0000003b",
          borderRadius: "4px",

          // "&.MuiInputBase-sizeSmall": { height: "27.125px" },
          // "&:not(.MuiInputBase-sizeSmall)": { height: "2.8375em" },
          "&.Mui-focused:after": { opacity: 1 },
          "& fieldset": { border: 0 },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "#f3f6f9",
            border: "1px solid #e0e3e7",
            borderRadius: "4px",

            "&.Mui-focused:after": { opacity: 1 },
            "& fieldset": { border: 0 },
            "&::before,&::after": { content: "none" },
          },
        },
      },
    },
  },
} as ThemeOptions)
