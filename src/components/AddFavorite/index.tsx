import './styles.scss'

import { useState } from 'react'

import bookMarkImg from '@/assets/images/bookmark.png'
import { Img } from '@/components/ui/Img'
import IAddFavorite from '@/types/IComponents/IAddFavorite'
import { onFavoriteClick } from '@/utils/onFavoriteClick'

import Favorites from '@/utils/favorites'

export function AddFavorite({ artId, ...attrs }: IAddFavorite) {
    const [favorite, setFavorite] = useState(Favorites.checkInclude(artId))

    function favoriteClick() {
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
