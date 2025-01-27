import { useContext, useEffect, useState } from 'react'
import Section from '../Section'
import './styles.scss'
import { IArt } from '../../services/interfaces/IArt'
import { AMOUNT_TO_GET, AMOUNT_TO_FETCH } from '@/constants/randomArts'
import { Context } from '../../main'
import ArtGridBlock from '../ArtGridBlock'
import Favorites from '../../utils/favourites'
import ArtsGridHeaders from './ArtsGridHeaders'
import ARTS_GRID_HEADERS from '../../constants/artsGridHeaders'
import Sort from '../Sort'
import { observer } from 'mobx-react-lite'

interface IArtsGrid {
    dataType: 'random' | 'favorites'
}

function ArtsGridComponent({ dataType }: IArtsGrid) {
    const { artsStore } = useContext(Context)

    const [arts, setArts] = useState(Array<IArt>)
    const [sortedArts, setSortedArts] = useState(Array<IArt>)

    useEffect(() => {
        const fetchRandomArts = async () => {
            const response = await artsStore.getRandom(AMOUNT_TO_FETCH, AMOUNT_TO_GET)
            if (response) {
                setArts(response)
                setSortedArts(response)
            }
        }

        const fetchFavorites = async () => {
            const favorites = Favorites.getFavorites()
            if (favorites.length === 0) return

            const response = await artsStore.getFavorites(favorites)
            if (response) {
                setArts(response)
                setSortedArts(response)
            }
        }

        switch (dataType) {
            case 'random':
                fetchRandomArts()
                break
            case 'favorites':
                fetchFavorites()
                break
            default:
        }
    }, [])

    useEffect(() => {
        const selectedParameter = artsStore.sortParameter
        const sortedArts = [...arts]

        if (selectedParameter !== 'no_sort') {
            sortedArts.sort((a, b) => {
                const valA = a[selectedParameter]?.toString().toLowerCase() || ''
                const valB = b[selectedParameter]?.toString().toLowerCase() || ''
                return valA.localeCompare(valB)
            })
        }

        setSortedArts(sortedArts)
    }, [artsStore.sortParameter, arts])

    return (
        <>
            <Section className="arts-grid">
                <div className="arts__headers">
                    <ArtsGridHeaders
                        first={ARTS_GRID_HEADERS[`${dataType}`][0]}
                        second={ARTS_GRID_HEADERS[`${dataType}`][1]}
                    />
                </div>
                {dataType === 'favorites' && <Sort />}
                <div className="arts-grid__grid">
                    {sortedArts &&
                        sortedArts.map((art) => (
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

const ArtsGrid = observer(ArtsGridComponent)
export default ArtsGrid
