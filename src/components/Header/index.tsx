import { HTMLAttributes } from 'react'
import './styles.scss'
import Button from '@components/Button/index'
import Img from '@components/Img'
import bookmarkImg from '@assets/images/bookmark.png'
import homeImg from '@assets/images/home.png'
import Nav from '../Nav'
import removeClassFromAttrs from '@utils/removeClassFromAttrs'
import { Link } from 'react-router-dom'

interface IHeader extends HTMLAttributes<HTMLHeadElement> {
    header_type: string
    [key: string]: any
}

function Header({ header_type, ...attrs }: IHeader) {
    const baseClass = 'header'
    const typeClass = baseClass + '--' + header_type
    const attrsNoClass = removeClassFromAttrs(attrs)

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
                    <Nav className={`${baseClass}__actions`}>
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
                    </Nav>
                </div>
            </header>
        </>
    )
}

export default Header
