import './styles.scss'

import IMain from '@/types/IComponents/IMain'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

export function Main({ children, ...attrs }: IMain) {
    const baseClass = 'main'
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <>
            <main
                className={`${baseClass} ${attrs.className || ''}`}
                {...attrsNoClass}
            >
                {children}
            </main>
        </>
    )
}
