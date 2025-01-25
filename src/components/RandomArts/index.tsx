import { useContext, useEffect, useState } from 'react'
import Section from '../Section'
import './styles.scss'
import { IArt } from '../../services/interfaces/IArt'
import { AMOUNT_TO_GET, AMOUNT_TO_FETCH } from '@constants/randomArts'
import { Context } from '../../main'
import ArtGridBlock from '../ArtGridBlock'

function RandomArts() {
    const { artsStore } = useContext(Context)

    const [arts, setArts] = useState(Array<IArt>)

    useEffect(() => {
        const fetchArts = async () => {
            const response = await artsStore.getRandom(AMOUNT_TO_FETCH, AMOUNT_TO_GET)
            if (response) {
                setArts(response)
            }
        }

        fetchArts()
    }, [])

    return (
        <>
            <Section className="random-arts">
                <div className="arts__headers">
                    <h3 className="arts__headers--first">Here some more</h3>
                    <h1 className="arts__headers--second">Other works for you</h1>
                </div>
                <div className="random-arts__grid">
                    {arts &&
                        arts.map((art) => (
                            <ArtGridBlock
                                data={art}
                                key={art.id}
                            />
                        ))}
                </div>
            </Section>
        </>
    )
}

export default RandomArts
