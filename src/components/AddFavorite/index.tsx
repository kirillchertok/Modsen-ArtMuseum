import './styles.scss'

import { useState } from 'react'

import bookMarkImg from '@/assets/images/bookmark.png'
import { Img } from '@/components/ui/Img'
import IAddFavorite from '@/types/IComponents/IAddFavorite'
import Favorites from '@/utils/favorites'
import { onFavoriteClick } from '@/utils/onFavoriteClick'

export function AddFavorite({ artId, ...attrs }: IAddFavorite) {
    const [favorite, setFavorite] = useState(Favorites.checkInclude(artId))

    function favoriteClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault()
        event.stopPropagation()
        onFavoriteClick({ favorite, setFavorite, artId })
    }

    return (
        <>
            <div className={`favorite__container ${attrs.className || ''}`}>
                <div
                    className={`favorite__image-container ${favorite ? 'favorite__image-container--in' : 'favorite__image-container--not-in'}`}
                    onClick={favoriteClick}
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
