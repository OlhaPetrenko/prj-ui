import React, { FC } from "react";

import s from "./Backdrop.module.scss";

interface IBackdropProp {
  children?: React.ReactNode;
  title?: string;
  onClose?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Backdrop: FC<IBackdropProp> = ({ children, title, onClose }) => {
  return (
    <div className={s.backdrop} onClick={(event) => onClose(event)}>
      <div className={s.content}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};
