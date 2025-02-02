import './styles.scss'

import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { ArtGridBlock } from '@/components/ArtGridBlock'
import { Sort } from '@/components/Sort'
import { Section } from '@/components/ui/Section'
import ARTS_GRID_HEADERS from '@/constants/artsGridHeaders'
import { AMOUNT_TO_FETCH, AMOUNT_TO_GET } from '@/constants/randomArts'
import { useFetchArtsGrid } from '@/hooks/useFetchArtsGrid'
import { useSortArts } from '@/hooks/useSortArtsGrid'
import { IArt } from '@/types/IArt'
import IArtsGrid from '@/types/IComponents/IArtsGrid'

import { ArtsGridHeaders } from './ArtsGridHeaders'

function ArtsGridComponent({ dataType }: IArtsGrid) {
    const [arts, setArts] = useState(Array<IArt>)
    const [sortedArts, setSortedArts] = useState(Array<IArt>)

    useFetchArtsGrid({ dataType, AMOUNT_TO_FETCH, AMOUNT_TO_GET, setArts, setSortedArts })

    useSortArts({ arts, setSortedArts })

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
