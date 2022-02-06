import { DefaultTheme } from "styled-components";
import { colorVariants, mediaBreakpoints, Mode } from "./types";

const LightColors: { [key in colorVariants]: string } = {
  primary: "#2717A5",
  primaryLight: "#F5F3FB",
  secondery: "#FB682A",
  seconderyLight: "#FBF4E8",
  backgroundDark: "#2c2c2c",
  backgroundLight:"#ffffff",
  success: "green",
  textColor: "#111214",
  error: "yellow",
  warning: "red",
};
const darkColors: { [key in colorVariants]: string } = {
  primary: "#2717A5",
  primaryLight: "#F5F3FB",
  secondery: "#FB682A",
  seconderyLight: "#FBF4E8",
  backgroundDark: "#2c2c2c",
  backgroundLight:"#ffffff",
  textColor: "#ffffff",
  success: "green",
  error: "yellow",
  warning: "red",
};

export const defaultTheme: DefaultTheme = {
  mode: "light",
  colors: { ...LightColors },
  breakPoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },

  mediaFor: function (
    type: "min" | "max" | "bw",
    breakPoint: mediaBreakpoints
  ): string {
    if (breakPoint.for && (type === "min" || type === "max")) {
      return `@media (${type}-width: ${
        type === "min"
          ? this.breakPoints[breakPoint.for]
          : this.breakPoints[breakPoint.for] - 1
      }px)`;
    }

    if (type === "bw" && breakPoint.range) {
      const { from, to } = breakPoint.range;
      return `@media (min-width:${
        this.breakPoints[from] + 1
      }px) and (max-width:${this.breakPoints[to]}px)`;
    }

    return "@media";
  },

  changeMode: function (mode: Mode) {
    this.mode = mode;
    if (mode === "dark") {
      this.colors = { ...darkColors };
    } else {
      this.colors = { ...LightColors };
    }
  },
};
