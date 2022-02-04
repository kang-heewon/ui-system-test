import React from "react";
import { FC } from "react";
import { Box } from "../../core/Box";
import { ComponentsTheme } from "../../core/theme";
import {
  getBaseVariable,
  getSizeVariable,
  getVariantionVariable,
} from "../../utils/getThemeVariable";

type ButtonTheme = ComponentsTheme["button"];

type ButtonProps = {
  size: keyof ButtonTheme["size"];
  variation: keyof ButtonTheme["variation"];
  customStyle?: Partial<ButtonTheme>;
};

export const Button: FC<ButtonProps> = ({
  variation,
  size,
  children,
  customStyle,
}) => {
  const baseStyle = getBaseVariable("button", customStyle);
  const variationStyle = getVariantionVariable(
    "button",
    variation,
    customStyle
  );
  const sizeStyle = getSizeVariable("button", size, customStyle);

  return (
    <Box style={{ ...baseStyle, ...variationStyle, ...sizeStyle }}>
      {children}
    </Box>
  );
};
