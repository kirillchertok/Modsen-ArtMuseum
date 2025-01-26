import { useParams } from 'react-router-dom'
import './styles.scss'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import DetailsError from '../../components/DetailsError'
import { IArt } from '../../services/interfaces/IArt'
import Img from '../../components/Img'
import noImageImage from '@assets/images/no-image.png'
import AddFavorite from '../../components/AddFavorite'

function Details() {
    const { artsStore } = useContext(Context)
    const { id } = useParams<{ id: string }>()
    const [error, setError] = useState<string>('')
    const [art, setArt] = useState<IArt>()

    useEffect(() => {
        const fetchArt = async (id: number) => {
            const response = await artsStore.getDetails(id)
            if (response) {
                console.log(response)
                if (response == 'No artwork with this id') {
                    setError(response)
                } else {
                    setArt(response)
                }
            }
        }

        if (id) {
            fetchArt(Number(id))
        } else {
            setError('No art to get, please enter id in search query')
        }
    }, [id])

    return (
        <>
            <Header header_type="details" />
            <Main>
                {error.length !== 0 || !art ? (
                    <>
                        <DetailsError message={error || 'Loading'} />
                    </>
                ) : (
                    <>
                        <article className="details__container">
                            <div className="details__image">
                                <Img
                                    src={art.image_url || noImageImage}
                                    alt={`image ${art.id}`}
                                    className="details__image__img"
                                />
                                <AddFavorite
                                    id={art.id}
                                    className="details__image__favorite"
                                />
                            </div>

                            <div className="details__description">
                                <div className="details__description__top">
                                    <h1 className="details__description--header">{art.title}</h1>
                                    <p className="details__description__top--artist">
                                        {art.artist_title}
                                    </p>
                                    <p className="details__description__top--years">
                                        {art.date_display.replace('/', ' - ')}
                                    </p>
                                </div>
                                <div className="details__description__bottom">
                                    <h1 className="details__description--header">Overview</h1>
                                    <ul className="details__description__bottom__overview">
                                        <li className="details__description__bottom__overview__li">
                                            <span className="details__description__bottom__overview__li--header">
                                                Artist nacionality:
                                            </span>
                                            {art.artist_display.split('\n')[1]}
                                        </li>
                                        <li className="details__description__bottom__overview__li">
                                            <span className="details__description__bottom__overview__li--header">
                                                Dimension Sheet:
                                            </span>
                                            {art.dimensions}
                                        </li>
                                        <li className="details__description__bottom__overview__li">
                                            <span className="details__description__bottom__overview__li--header">
                                                Credit Line:
                                            </span>
                                            {art.credit_line}
                                        </li>
                                        <li className="details__description__bottom__overview__li">
                                            <span className="details__description__bottom__overview__li--header">
                                                Department:
                                            </span>
                                            {art.department_title}
                                        </li>
                                        <li className="details__description__bottom__overview__li">
                                            {art.is_public_domain ? '' : 'Not '}Public
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </>
                )}
            </Main>
            <Footer />
        </>
    )
}

export default Details
