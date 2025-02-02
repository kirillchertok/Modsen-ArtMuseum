import './styles.scss'

import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

import noImageImage from '@/assets/images/no-image.png'
import { AddFavorite } from '@/components/AddFavorite'
import { DetailsError } from '@/components/ui/DetailsError'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { Img } from '@/components/ui/Img'
import { Loader } from '@/components/ui/Loader'
import { Main } from '@/components/ui/Main'
import { useFetchArt } from '@/hooks/useFetchArt'
import { Context } from '@/main'
import { IArt } from '@/types/IArt'

export function Details() {
    const { artsStore } = useContext(Context)
    const { id } = useParams<{ id: string }>()
    const [error, setError] = useState<string>('')
    const [art, setArt] = useState<IArt>()

    useFetchArt({ id, setError, setArt })

    return (
        <>
            {artsStore.isFetching && <Loader />}
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
                                    artId={art.id}
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
