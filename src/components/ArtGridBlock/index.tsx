import { IArt } from '../../services/interfaces/IArt'
import Img from '../Img'
import './styles.scss'
import noImageImg from '@assets/images/no-image.png'
import AddFavorite from '../AddFavorite'
import { Link } from 'react-router-dom'

interface IArtGridBlock {
    data: IArt
    [key: string]: any
}

function ArtGridBlock({ data }: IArtGridBlock) {
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
                        id={data.id}
                        className="art-grid__description__favorite"
                    />
                </div>
            </article>
        </>
    )
}

export default ArtGridBlock
