import React from "react";
import { Button, Popup } from "semantic-ui-react";
const style = {
  borderRadius: "5px",
  opacity: 0.8,
  padding: "1em",
};

interface IPrjPopupProps {
  content?: string;
  size?: "mini" | "tiny" | "small" | "large" | "huge";
  wide?: boolean;
  position?: "left center" | "right center" | "top center" | "bottom center";
}

export function PrjPopup(props: IPrjPopupProps) {
  const {
    content = "Popup content",
    size = "small",
    wide = false,
    position = "top center",
  } = props;

  return (
    <Popup
      trigger={
        <Button
          icon="info"
          style={{ borderRadius: "10%", background: "rgb(177, 86, 177)" }}
        />
      }
      content={content}
      size={size}
      wide={wide}
      style={style}
      offset={[0, 5]}
      position={position}
    />
  );
}
