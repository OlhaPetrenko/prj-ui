import React, { FC, ReactNode } from "react";
import { Label } from "semantic-ui-react";
import { PrjIcon } from "../Icon/Icon";

interface IPrjLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  size?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
  active?: boolean;
}

export const PrjLabel: FC<IPrjLabelProps> = (props) => {
  const { children, title = "label", size = "small", active = true } = props;

  return (
    <Label size={size} active={active}>
      {children}
      {title}
    </Label>
  );
};
