import { ImgHTMLAttributes } from 'react'
import './styles.scss'

interface IImg extends ImgHTMLAttributes<HTMLImageElement> {
    [key: string]: any
}

function Img({ ...attrs }: IImg) {
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

export default Img
