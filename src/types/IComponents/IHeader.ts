import { HTMLAttributes } from 'react'

export default interface IHeader extends HTMLAttributes<HTMLHeadElement> {
    header_type: string
    [key: string]: any
}