export type Breakpoints = "md" | "sm" | "lg" | "xl" | "xxl";
export type Mode = "light" | "dark";

export type colorVariants =
  | "primary"
  | "primaryLight"
  | "secondery"
  | "seconderyLight"
  | "backgroundLight"
  | "backgroundDark"
  | "textColor"
  | "success"
  | "warning"
  | "error";

export type Colors = {
  [key in colorVariants]: string;
};

export interface mediaBreakpoints {range?:{from:Breakpoints , to:Breakpoints},
for?:Breakpoints
}