import { ReactNode } from "react";
export interface AppMenu {
  id: string | number;
  label: string;
  path?: string;
  component?: ReactNode;
}
