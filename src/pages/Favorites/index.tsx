import './styles.scss'

import { useContext } from 'react'

import bookmarkLargeImage from '@/assets/images/bookmarkLarge.png'
import ArtsGrid from '@/components/ArtsGrid'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { Img } from '@/components/ui/Img'
import { Loader } from '@/components/ui/Loader'
import { Main } from '@/components/ui/Main'
import { Section } from '@/components/ui/Section'
import { Context } from '@/main'

export function Favorites() {
    const { artsStore } = useContext(Context)

    return (
        <>
            {artsStore.isFetching && <Loader />}
            <Header header_type="favorites" />
            <Main>
                <Section className="favorites">
                    <div className="favorites__headers">
                        <h1>Here Are Your</h1>
                        <h1 className="favorites__headers__orange">
                            <Img
                                src={bookmarkLargeImage}
                                alt="favorites bookmark"
                                className="favorites__headers__orange--image"
                            />
                            Favorites
                        </h1>
                    </div>
                    <ArtsGrid dataType="favorites" />
                </Section>
            </Main>
            <Footer />
        </>
    )
}
