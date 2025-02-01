import { ImgHTMLAttributes } from "react";

export default interface IImg extends ImgHTMLAttributes<HTMLImageElement> {
    [key: string]: any
}