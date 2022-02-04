import { css, CSSObject } from "@emotion/css";
import React from "react";
import { FC } from "react";

export const Box: FC<{
  style: CSSObject;
}> = ({ style, ...rest }) =>
  React.createElement("div", { ...rest, className: css(style) });
