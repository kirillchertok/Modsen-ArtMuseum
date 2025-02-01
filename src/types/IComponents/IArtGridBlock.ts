import { HTMLAttributes } from "react"

import { IArt } from "../IArt"

export default interface IArtGridBlock extends HTMLAttributes<HTMLElement> {
    data: IArt
    [key: string]: any
}