import { useState, useRef } from 'react'
import { HTMLAttributes } from 'react'
import './styles.scss'
import Img from '@/components/Img'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'
import { SideBarReactIcon } from '@/constants/icons'
import useClickOutside from '@/hooks/useClickOutside'
import Nav from '../Nav'

interface IHeader extends HTMLAttributes<HTMLHeadElement> {
    header_type: string
    [key: string]: any
}

function Header({ header_type, ...attrs }: IHeader) {
    const baseClass = 'header'
    const typeClass = baseClass + '--' + header_type
    const attrsNoClass = removeClassFromAttrs(attrs)

    const [isMenuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useClickOutside(menuRef, () => setMenuOpen(false))

    return (
        <>
            <header
                {...attrsNoClass}
                className={`${baseClass} ${typeClass} ${attrs.className || ''}`}
            >
                <div className={`${baseClass}__container`}>
                    <Img
                        className={`${baseClass}__logo`}
                        src="/logo.png"
                        alt="logo"
                    />
                    <div className={`${baseClass}__burger`}>
                        {!isMenuOpen && (
                            <>
                                <div
                                    className={`${baseClass}__burger__button`}
                                    onClick={() => setMenuOpen(true)}
                                >
                                    <SideBarReactIcon />
                                </div>
                            </>
                        )}
                        {isMenuOpen && (
                            <>
                                <div
                                    className={`${baseClass}__burger__container`}
                                    ref={menuRef}
                                >
                                    <Nav
                                        header_type={header_type}
                                        nav_type="default"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <Nav
                        className={`${baseClass}__actions`}
                        header_type={header_type}
                        nav_type="default"
                    />
                </div>
            </header>
        </>
    )
}

export default Header
