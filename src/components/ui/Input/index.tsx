import './styles.scss'

import { useRef } from 'react'

import IInput from '@/types/IComponents/IInput'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

export function Input({ input_type, icon, ...attrs }: IInput) {
    const baseClass = 'input'
    const typeClass = `${baseClass}--${input_type}`
    const attrsNoClass = removeClassFromAttrs(attrs)

    const inputRef = useRef<HTMLInputElement>(null)

    const iconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    return (
        <>
            <div className={`${baseClass}__container ${attrs.className || ''}`}>
                <input
                    ref={inputRef}
                    className={`${baseClass} ${typeClass}`}
                    {...attrsNoClass}
                />
                {input_type === 'icon_text' && icon && (
                    <div
                        onClick={iconClick}
                        className={`${baseClass}__icon`}
                    >
                        {icon}
                    </div>
                )}
            </div>
        </>
    )
}
