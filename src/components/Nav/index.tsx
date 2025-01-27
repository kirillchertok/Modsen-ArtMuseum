import React from 'react'
import './styles.scss'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

interface INav {
    children?: React.ReactNode
    [key: string]: any
}

function Nav({ children, ...attrs }: INav) {
    const baseClass = 'nav'
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <>
            <nav
                className={`${baseClass} ${attrs.className || ''}`}
                {...attrsNoClass}
            >
                {children}
            </nav>
        </>
    )
}

export default Nav
