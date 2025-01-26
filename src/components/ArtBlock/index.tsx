import { IArt } from '../../services/interfaces/IArt'
import Img from '../Img'
import './styles.scss'
import noImageImg from '@assets/images/no-image.png'
import AddFavorite from '../AddFavorite'
import { Link } from 'react-router-dom'

interface IArtBlock {
    data: IArt
    [key: string]: any
}

function ArtBlock({ data, ...attrs }: IArtBlock) {
    return (
        <>
            <article
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
                        <Link
                            to={`/details/${data.id}`}
                            className="description__text--title"
                        >
                            {data.title}
                        </Link>
                        <p className="description__text--artist">
                            {data.artist_title || 'Unknown'}
                        </p>
                        <p className="description__text--is-public">
                            {!data.is_public_domain ? 'Not ' : ''}Public
                        </p>
                    </div>
                    <AddFavorite
                        id={data.id}
                        className="description__to-favorite"
                    />
                </div>
            </article>
        </>
    )
}

export default ArtBlock
