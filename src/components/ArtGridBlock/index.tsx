import './styles.scss'

import { Link } from 'react-router-dom'

import noImageImg from '@/assets/images/no-image.png'
import { AddFavorite } from '@/components/AddFavorite'
import { Img } from '@/components/ui/Img'
import IArtGridBlock from '@/types/IComponents/IArtGridBlock'

export function ArtGridBlock({ data }: IArtGridBlock) {
    return (
        <>
            <Link
                className="art-grid__container"
                to={`/details/${data.id}`}
            >
                <Img
                    src={data.image_url || noImageImg}
                    alt={`image for ${data.id}`}
                    className="art-grid__image"
                />
                <div className="art-grid__description">
                    <div className="art-grid__description__text">
                        <div className="description__text--title">{data.title}</div>
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
            </Link>
        </>
    )
}
