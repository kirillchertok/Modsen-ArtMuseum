import { HTMLAttributes } from "react"

export default interface IAddFavorite extends HTMLAttributes<HTMLElement> {
    artId: number
    [key: string]: any
}