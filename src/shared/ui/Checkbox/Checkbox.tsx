import React, { FC } from "react";
import { Checkbox } from "semantic-ui-react";

interface IPrjCheckboxProps {
  type?: "checkbox" | "radio";
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

export const PrjCheckbox: FC<IPrjCheckboxProps> = ({
  label,
  checked,
  disabled = false,
  type = "checkbox",
}) => {
  return (
    <Checkbox label={label} checked={checked} disabled={disabled} type={type} />
  );
};
