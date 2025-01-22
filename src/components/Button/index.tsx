import React, { ButtonHTMLAttributes } from "react";
import "./styles.scss";
import removeClassFromAttrs from "@utils/removeClassFromAttrs";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  button_type: "icon" | "icon_text" | "text";
  icon?: React.ReactNode;
  text?: string;
  [key: string]: any;
}

function Button({ button_type, icon, text, ...attrs }: IButton) {
  const baseClass = "button";
  const typeClass = `${baseClass}--${button_type}`;
  const attrsNoClass = removeClassFromAttrs(attrs);

  return (
    <button
      className={`${baseClass} ${typeClass} ${attrs.className || ""}`}
      {...attrsNoClass}
    >
      {button_type !== "text" && icon && (
        <span className={`${baseClass}__icon`}>{icon}</span>
      )}
      {button_type !== "icon" && text && (
        <span className={`${baseClass}__text`}>{text}</span>
      )}
    </button>
  );
}

export default Button;
