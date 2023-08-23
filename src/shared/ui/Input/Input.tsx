import React, { HTMLAttributes } from "react";
import { Input } from "semantic-ui-react";
interface IPrjInputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  isDisabled?: boolean;
  isError?: boolean;
  icon?: string;
  iconPosition?: "left";
  label?: string;
  fluid?: boolean;
  size?: "mini" | "small" | "large" | "big" | "huge" | "massive";
}

export function PrjInput(props: IPrjInputProps) {
  const {
    placeholder = "Search...",
    isDisabled = false,
    isError = false,
    icon,
    iconPosition,
    label,
    fluid = false,
    size = "small",
  } = props;
  return (
    <Input
      placeholder={placeholder}
      disabled={isDisabled}
      error={isError}
      icon={icon}
      iconPosition={iconPosition}
      label={label}
      fluid={fluid}
      size={size}
    />
  );
}
