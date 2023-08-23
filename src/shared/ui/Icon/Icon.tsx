import React, { FC } from "react";
import { Icon } from "semantic-ui-react";

interface IPrjIconPros {
  name?: "users" | "mail";
  size?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
}

export const PrjIcon: FC<IPrjIconPros> = ({ name }) => {
  return <Icon name={name} />;
};
