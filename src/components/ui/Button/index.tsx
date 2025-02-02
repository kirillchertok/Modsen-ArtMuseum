import './styles.scss'

import IButton from '@/types/IComponents/IButton'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

export function Button({ button_type, icon, text, ...attrs }: IButton) {
    const baseClass = 'button'
    const typeClass = `${baseClass}--${button_type}`
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <button
            className={`${baseClass} ${typeClass} ${attrs.className || ''}`}
            {...attrsNoClass}
        >
            {button_type !== 'text' && icon && <span className={`${baseClass}__icon`}>{icon}</span>}
            {button_type !== 'icon' && text && <span className={`${baseClass}__text`}>{text}</span>}
        </button>
    )
}
