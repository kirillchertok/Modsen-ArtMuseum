import React from 'react'
import './styles.scss'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Img from '../Img'
import bookmarkImg from '@/assets/images/bookmark.png'
import homeImg from '@/assets/images/home.png'

interface INav {
    header_type: string
    nav_type: string
    [key: string]: any
}

function Nav({ header_type, nav_type, ...attrs }: INav) {
    const baseClass = 'nav'
    const typeClass = baseClass + '--' + nav_type
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <>
            <nav
                className={`${baseClass} ${typeClass} ${attrs.className || ''}`}
                {...attrsNoClass}
            >
                {header_type !== 'home' && (
                    <Link to={`/`}>
                        <Button
                            button_type="icon_text"
                            text="Home"
                            icon={
                                <Img
                                    src={homeImg}
                                    alt="home"
                                />
                            }
                            className="header__button header__button--home"
                        />
                    </Link>
                )}
                <Link to={`/favorites`}>
                    <Button
                        button_type="icon_text"
                        icon={
                            <Img
                                src={bookmarkImg}
                                alt="bookmark"
                            />
                        }
                        text="Your favorites"
                        className="header__button header__button--favorites"
                    />
                </Link>
            </nav>
        </>
    )
}

export default Nav
