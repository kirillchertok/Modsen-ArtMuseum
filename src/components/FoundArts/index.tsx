import { useContext, useEffect, useState } from 'react'
import { IArt } from '../../services/interfaces/IArt'
import Section from '../Section'
import './styles.scss'
import { Context } from '../../main'
import { observer } from 'mobx-react-lite'
import ArtBlock from '../ArtBlock'
import { PAGE_INTERVAL_LENGTH } from '@/constants/pagination'

interface IFoundArts {
    searchQuery: string
    arts: IArt[]
}

function FoundArtsComponent({ searchQuery, arts }: IFoundArts) {
    const { artsStore } = useContext(Context)

    const [pages, setPages] = useState(Array<number>)

    useEffect(() => {
        const currentPage = Number(
            sessionStorage.getItem('currentPage') || artsStore.pagination.current_page
        )
        const pageInterval = Math.min(artsStore.pagination.total_pages, PAGE_INTERVAL_LENGTH)

        if (
            currentPage - 1 === pages[pages.length - 1] ||
            currentPage + 1 === pages[0] ||
            pages.length === 0
        ) {
            setPages(Array.from({ length: pageInterval }, (_, i) => currentPage + i))
        }
    }, [artsStore.pagination.current_page])

    useEffect(() => {
        if (sessionStorage.getItem('query')) sessionStorage.removeItem('query')
        if (searchQuery) sessionStorage.setItem('query', searchQuery)

        artsStore.initialFetch()
    }, [searchQuery])

    return (
        <>
            <Section className="arts">
                <div className="arts__headers">
                    <h3 className="arts__headers--first">Topics for you</h3>
                    <h1 className="arts__headers--second">Our special gallery</h1>
                </div>
                <div className="arts__blocks">
                    {arts &&
                        arts.map((art) => (
                            <ArtBlock
                                key={art.id}
                                data={art}
                            />
                        ))}
                </div>
                <div className="arts__pagination">
                    {artsStore.pagination.current_page !== 1 && (
                        <div
                            className="arts__pagination__button"
                            onClick={() => artsStore.prevPage()}
                        >
                            &lt;
                        </div>
                    )}
                    <div className="arts__pagination__pages">
                        {pages &&
                            pages.map((page) => (
                                <div
                                    key={page}
                                    className={`arts__pagination__page${page === Number(sessionStorage.getItem('currentPage')) ? '--current' : ''}`}
                                    onClick={() => artsStore.goToPage(page)}
                                >
                                    {page}
                                </div>
                            ))}
                    </div>
                    {artsStore.pagination.current_page < artsStore.pagination.total_pages && (
                        <div
                            className="arts__pagination__button"
                            onClick={() => artsStore.nextPage()}
                        >
                            &gt;
                        </div>
                    )}
                </div>
            </Section>
        </>
    )
}

const FoundArts = observer(FoundArtsComponent)
export default FoundArts
