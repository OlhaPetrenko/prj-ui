import React, { FC } from "react";
import { Loader } from "semantic-ui-react";

interface IPrjLoaderProps {
  active?: boolean;
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

export const PrjLoader: FC<IPrjLoaderProps> = ({
  active = false,
  size = "medium",
}) => {
  return <Loader active={active} size={size} inline="centered" />;
};
