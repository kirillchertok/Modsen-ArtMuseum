import './styles.scss'

import { useRef, useState } from 'react'

import { Img } from '@/components/ui/Img'
import { Nav } from '@/components/ui/Nav'
import { SideBarReactIcon } from '@/constants/icons'
import useClickOutside from '@/hooks/useClickOutside'
import IHeader from '@/types/IComponents/IHeader'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

export function Header({ header_type, ...attrs }: IHeader) {
    const baseClass = 'header'
    const typeClass = baseClass + '--' + header_type
    const attrsNoClass = removeClassFromAttrs(attrs)

    const [isMenuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    function onOpenMenuClick() {
        setMenuOpen(true)
    }

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
                                    onClick={onOpenMenuClick}
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
