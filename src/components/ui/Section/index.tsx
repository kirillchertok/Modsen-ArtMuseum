import './styles.scss'

import ISection from '@/types/IComponents/ISection'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

export function Section({ children, ...attrs }: ISection) {
    const baseClass = 'section'
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <>
            <section
                className={`${baseClass} ${attrs.className || ''}`}
                {...attrsNoClass}
            >
                {children}
            </section>
        </>
    )
}
