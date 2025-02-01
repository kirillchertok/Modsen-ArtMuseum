import { ButtonHTMLAttributes } from "react"

export default interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    button_type: 'icon' | 'icon_text' | 'text'
    icon?: React.ReactNode
    text?: string
    [key: string]: any
}