import React from "react";

import s from "./Divider.module.scss";

interface IDividerProps {
  isHorizontal?: boolean;
}

export function Divider({ isHorizontal = true }: IDividerProps) {
  const cn = isHorizontal ? s.horizontal : s.vertical;

  return <div className={cn}></div>;
}
