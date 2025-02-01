import './styles.scss'

import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { AMOUNT_TO_FETCH, AMOUNT_TO_GET } from '@/constants/randomArts'
import { useFetchArtsGrid } from '@/hooks/useFetchArtsGrid'
import { useSortArts } from '@/hooks/useSortArtsGrid'
import IArtsGrid from '@/types/IComponents/IArtsGrid'

import ARTS_GRID_HEADERS from '@/constants/artsGridHeaders'
import { IArt } from '@/types/IArt'
import { ArtGridBlock } from '@/components/ArtGridBlock'
import { Section } from '@/components/ui/Section'
import { Sort } from '@/components/Sort'
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
