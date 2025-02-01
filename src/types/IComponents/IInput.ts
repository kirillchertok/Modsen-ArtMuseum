import { InputHTMLAttributes } from "react"

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    input_type: 'text' | 'icon_text'
    icon?: React.ReactNode
    [key: string]: any
}