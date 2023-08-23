import React from "react";

import s from "./modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div className={s.backdrop} onClick={(event) => onClose(event)}>
      <div className={s.content}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default Modal;
