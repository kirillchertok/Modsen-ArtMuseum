import removeClassFromAttrs from '@/utils/removeClassFromAttrs'
import './styles.scss'
import Img from '../Img'
import footerLogo from '@/assets/images/footer-logo.png'
import modsenLogo from '@/assets/images/modsen-logo.png'

interface IFooter {
    [key: string]: any
}

function Footer({ ...attrs }: IFooter) {
    const baseClass = 'footer'
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <>
            <footer
                className={`${baseClass} ${attrs.className || ''}`}
                {...attrsNoClass}
            >
                <div className={`${baseClass}__container`}>
                    <Img
                        className={`${baseClass}__logo`}
                        src={footerLogo}
                        alt="footer logo"
                    />
                    <Img
                        className={`${baseClass}__modsen-logo`}
                        src={modsenLogo}
                        alt="modsen logo"
                    />
                </div>
            </footer>
        </>
    )
}

export default Footer
