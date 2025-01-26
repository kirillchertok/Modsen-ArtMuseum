import ArtsGrid from '../../components/ArtsGrid'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Img from '../../components/Img'
import Main from '../../components/Main'
import Section from '../../components/Section'
import './styles.scss'
import bookmarkLargeImage from '@assets/images/bookmarkLarge.png'

function Favorites() {
    return (
        <>
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

export default Favorites
