import './styles.scss'

import { Link } from 'react-router-dom'

import noImageImg from '@/assets/images/no-image.png'
import { AddFavorite } from '@/components/AddFavorite'
import { Img } from '@/components/ui/Img'
import IArtBlock from '@/types/IComponents/IArtBlock'

export function ArtBlock({ data, ...attrs }: IArtBlock) {
    return (
        <>
            <Link
                to={`/details/${data.id}`}
                className="art"
                {...attrs}
            >
                <Img
                    src={data.image_url || noImageImg}
                    alt={`image ${data.id}`}
                    className="art__image"
                />
                <div className="art__description">
                    <div className="description__text">
                        <div className="description__text--title">{data.title}</div>
                        <p className="description__text--artist">
                            {data.artist_title || 'Unknown'}
                        </p>
                        <p className="description__text--is-public">
                            {!data.is_public_domain ? 'Not ' : ''}Public
                        </p>
                    </div>
                    <AddFavorite
                        artId={data.id}
                        className="description__to-favorite"
                    />
                </div>
            </Link>
        </>
    )
}
