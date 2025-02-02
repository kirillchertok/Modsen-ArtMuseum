import { HTMLAttributes } from "react"

import { IArt } from "../IArt"

export default interface IArtBlock extends HTMLAttributes<HTMLElement> {
    data: IArt
    [key: string]: any
}