import React, { InputHTMLAttributes, useRef } from "react";
import "./styles.scss";
import removeClassFromAttrs from "../../utils/removeClassFromAttrs";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  input_type: "text" | "icon_text";
  icon?: React.ReactNode;
  [key: string]: any;
}

function Input({ input_type, icon, ...attrs }: IInput) {
  const baseClass = "input";
  const typeClass = `${baseClass}--${input_type}`;
  const attrsNoClass = removeClassFromAttrs(attrs);

  const inputRef = useRef<HTMLInputElement>(null);

  const iconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div className={`${baseClass}__container ${attrs.className || ""}`}>
        <input
          ref={inputRef}
          className={`${baseClass} ${typeClass}`}
          {...attrsNoClass}
        />
        {input_type === "icon_text" && icon && (
          <div onClick={iconClick} className={`${baseClass}__icon`}>
            {icon}
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
