import './styles.scss'

import { Link } from 'react-router-dom'

import noImageImg from '@/assets/images/no-image.png'
import { Img } from '@/components/ui/Img'
import IArtGridBlock from '@/types/IComponents/IArtGridBlock'

import { AddFavorite } from '@/components/AddFavorite'

export function ArtGridBlock({ data }: IArtGridBlock) {
    return (
        <>
            <article className="art-grid__container">
                <Img
                    src={data.image_url || noImageImg}
                    alt={`image for ${data.id}`}
                    className="art-grid__image"
                />
                <div className="art-grid__description">
                    <div className="art-grid__description__text">
                        <Link
                            to={`/details/${data.id}`}
                            className="description__text--title"
                        >
                            {data.title}
                        </Link>
                        <p className="art-grid__description__text--artist">
                            {data.artist_title || 'Unknown'}
                        </p>
                        <p className="art-grid__description__text--is-public">
                            {data.is_public_domain ? '' : 'Not '}Public
                        </p>
                    </div>
                    <AddFavorite
                        artId={data.id}
                        className="art-grid__description__favorite"
                    />
                </div>
            </article>
        </>
    )
}
