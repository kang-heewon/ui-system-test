import { CSSObject } from "@emotion/css";
import { colors } from "./color";
import { fontSize, fontWeight } from "./font";

const Style = (args: CSSObject) => args;

export const themes = {
  core: {
    color: colors,
    font: {
      size: fontSize,
      weight: fontWeight,
    },
  },
  components: {
    button: {
      base: Style({
        position: "relative",
        fontWeight: "600",
        userSelect: "none",
        borderRadius: "4px",
        display: "inline-flex",
        justifyContent: "center",
        textDecoration: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        alignItems: "center",
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          transition: "background-color 100ms ease-in-out",
        },
      }),
      size: {
        lg: {
          height: "38px",
          minWidth: "64px",
          fontSize: "15px",
          padding: "0 16px",
        },
        md: {
          height: "38px",
          minWidth: "64px",
          fontSize: "15px",
          padding: "0 16px",
        },
        sm: {
          height: "38px",
          minWidth: "64px",
          fontSize: "15px",
          padding: "0 16px",
        },
      },
      variation: {
        primary: Style({
          color: "#ffffff",
          backgroundColor: "#3182f6",

          "&:hover": {
            backgroundColor: "#3182f6",
            boxShadow: "inset 0 0 0 2px transparent",
            "&::after": {
              backgroundColor: "rgba(0,0,30,0.29)",
            },
          },
        }),
      },
    },
  },
} as const;

export type Theme = typeof themes;
export type ComponentsTheme = Theme["components"];

export type ComponentKey = keyof ComponentsTheme;
export type ComponentTheme = ComponentsTheme[ComponentKey];

export type ThemeVariableKey = keyof ComponentTheme;
export type ThemeVariable = ComponentTheme[ThemeVariableKey];
