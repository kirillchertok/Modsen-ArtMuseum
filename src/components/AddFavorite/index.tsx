import { HTMLAttributes, useState } from 'react'
import Img from '../Img'
import './styles.scss'
import bookMarkImg from '@/assets/images/bookmark.png'
import Favorites from '../../utils/favourites'

interface IAddFavorite extends HTMLAttributes<HTMLElement> {
    artId: number
    [key: string]: any
}

function AddFavorite({ artId, ...attrs }: IAddFavorite) {
    const [favorite, setFavorite] = useState(Favorites.checkInclude(artId))

    return (
        <>
            <div className={`favorite__container ${attrs.className || ''}`}>
                <div
                    className={`favorite__image-container ${favorite ? 'favorite__image-container--in' : 'favorite__image-container--not-in'}`}
                    onClick={() => {
                        if (favorite) {
                            Favorites.removeFromFavorite(artId)
                            setFavorite(false)
                        } else {
                            Favorites.addToFavorite(artId)
                            setFavorite(true)
                        }
                    }}
                >
                    <Img
                        src={bookMarkImg}
                        alt="favorite image"
                        className="favorite__image"
                    />
                </div>
            </div>
        </>
    )
}

export default AddFavorite
