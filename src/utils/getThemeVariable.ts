import { merge } from "lodash";
import { ComponentKey, ComponentTheme, themes } from "../core/theme";

const getTheme = (
  componentKey: ComponentKey,
  customTheme?: Partial<ComponentTheme>
) => merge(themes.components[componentKey], customTheme);

export const getVariantionVariable = (
  componentKey: ComponentKey,
  variationKey: keyof ComponentTheme["variation"],
  customTheme?: Partial<ComponentTheme>
) => {
  const theme = getTheme(componentKey, customTheme);
  return theme["variation"][variationKey];
};

export const getSizeVariable = (
  componentKey: ComponentKey,
  variationKey: keyof ComponentTheme["size"],
  customTheme?: Partial<ComponentTheme>
) => {
  const theme = getTheme(componentKey, customTheme);

  return theme["size"][variationKey];
};

export const getBaseVariable = (
  componentKey: ComponentKey,
  customTheme?: Partial<ComponentTheme>
) => {
  const theme = getTheme(componentKey, customTheme);

  return theme["base"];
};
