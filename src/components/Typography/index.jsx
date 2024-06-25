import clsx from "clsx";

import cn from "./style.module.scss";

export const Size = {
  default: "text--md",
  ["2xl"]: "text--2xl",
  xl: "text--xl",
  lg: "text--lg",
  md: "text--md",
  sm: "text--sm",
};

export const Boldness = {
  default: "text-boldness--normal",
  bold: "text-boldness--bold",
  semibold: "text-boldness--semibold",
  normal: "text-boldness--normal",
  low: "text-boldness--low",
};

export function Text({
  size = Size.default,
  boldness = Boldness.default,
  children,
  style,
}) {
  return (
    <span className={clsx(cn["text"], cn[size], cn[boldness])} style={style}>
      {children}
    </span>
  );
}
