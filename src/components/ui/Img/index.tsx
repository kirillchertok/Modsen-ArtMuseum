import './styles.scss'

import IImg from '@/types/IComponents/IImg'

export function Img({ ...attrs }: IImg) {
    const baseClass = 'img'
    const attrsNoClass = Object.fromEntries(
        Object.entries(attrs).filter((attr) => attr[0] !== 'className')
    )

    return (
        <>
            <img
                className={`${baseClass} ${attrs.className || ''}`}
                {...attrsNoClass}
            />
        </>
    )
}
