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
    main: "#343434",
    light: "#4d4d4d",
    dark: "#1a1a1a",
    "50": "#ffffff",
    "100": "#cdcdcd",
    "200": "#e6e6e6",
    "300": "#b3b3b3",
    "400": "#808080",
    "500": "#676767",
    "600": "#4d4d4d",
    "700": "#343434",
    "800": "#1a1a1a",
    "900": "#000000",
  },
  secondary: {
    main: "#2257ff",
    light: "#366bff",
    dark: "#0439e1",
    "50": "#5489ff",
    "100": "#4a7fff",
    "200": "#4075ff",
    "300": "#366bff",
    "400": "#2c61ff",
    "500": "#2257ff",
    "600": "#184df5",
    "700": "#0e43eb",
    "800": "#0439e1",
    "900": "#002fd7",
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
