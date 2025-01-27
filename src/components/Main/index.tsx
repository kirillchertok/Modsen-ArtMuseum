import React from 'react'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'
import './styles.scss'

interface IMain {
    children?: React.ReactNode
    [key: string]: any
}

function Main({ children, ...attrs }: IMain) {
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

export default Main
