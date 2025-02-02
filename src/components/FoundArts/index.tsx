import './styles.scss'

import { observer } from 'mobx-react-lite'
import { useCallback, useContext, useState } from 'react'

import { ArtBlock } from '@/components/ArtBlock'
import { Section } from '@/components/ui/Section'
import { PAGE_INTERVAL_LENGTH } from '@/constants/pagination'
import { usePagination } from '@/hooks/usePagination'
import { useSearch } from '@/hooks/useSearch'
import { Context } from '@/main'
import IFoundArts from '@/types/IComponents/IFoundArts'

function FoundArtsComponent({ searchQuery, arts }: IFoundArts) {
    const { artsStore } = useContext(Context)

    const [pages, setPages] = useState(Array<number>)

    usePagination({ pages, setPages, PAGE_INTERVAL_LENGTH })

    useSearch({ searchQuery })

    function prevPageClick() {
        artsStore.prevPage()
    }

    function nextPageClick() {
        artsStore.nextPage()
    }

    const onPageClick = useCallback((page: number) => {
        artsStore.goToPage(page)
    }, [])

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
                            onClick={prevPageClick}
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
                                    onClick={onPageClick.bind(null, page)}
                                >
                                    {page}
                                </div>
                            ))}
                    </div>
                    {artsStore.pagination.current_page < artsStore.pagination.total_pages && (
                        <div
                            className="arts__pagination__button"
                            onClick={nextPageClick}
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
export { FoundArts }
