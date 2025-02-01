import { HTMLAttributes } from "react";

export default interface IArtsGrid extends HTMLAttributes<HTMLElement> {
    dataType: 'random' | 'favorites'
}