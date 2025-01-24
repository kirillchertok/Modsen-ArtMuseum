import React, { HTMLAttributes } from "react";
import removeClassFromAttrs from "../../utils/removeClassFromAttrs";
import "./styles.scss";

interface ISection extends HTMLAttributes<HTMLBaseElement> {
  children: React.ReactNode;
  [key: string]: any;
}

function Section({ children, ...attrs }: ISection) {
  const baseClass = "section";
  const attrsNoClass = removeClassFromAttrs(attrs);

  return (
    <>
      <section
        className={`${baseClass} ${attrs.className || ""}`}
        {...attrsNoClass}
      >
        {children}
      </section>
    </>
  );
}

export default Section;
