import { HTMLAttributes } from "react"

export default interface INav extends HTMLAttributes<HTMLElement>{
    header_type: string
    nav_type: string
    [key: string]: any
}
