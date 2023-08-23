import React, { ReactNode, FC } from "react";
import { Button } from "semantic-ui-react";

import s from "./Button.module.scss";

// const style = {
//   borderRadius: "5px",
//   padding: "1em 2em",
//   border: "2px solid red",
// };

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  fullWidth?: boolean;
  isPrimary?: boolean;
  content?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large" | "big";
  className?: string;
}

export function PrjButton(props: IButtonProps) {
  const {
    children,
    type = "button",
    disabled = false,
    fullWidth = false,
    isPrimary = true,
    content,
    onClick,
    size = "medium",
    className,
  } = props;

  return (
    <Button
      primary={isPrimary}
      fluid={fullWidth}
      size={size}
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {content}
    </Button>
  );
}

// export default PrjButton;
