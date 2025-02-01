import { HTMLAttributes } from "react";

export default interface ISection extends HTMLAttributes<HTMLBaseElement> {
  children: React.ReactNode;
  [key: string]: any;
}