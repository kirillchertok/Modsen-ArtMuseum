import './styles.scss'

import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'

import ArtsGrid from '@/components/ArtsGrid'
import { FoundArts } from '@/components/FoundArts'
import { Search } from '@/components/Search'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { Loader } from '@/components/ui/Loader'
import { Main } from '@/components/ui/Main'
import { useFetchArtsHome } from '@/hooks/useFetchArtsHome'
import { Context } from '@/main'

function HomeComponent() {
    const { artsStore } = useContext(Context)

    const [searchQuery, setSearchQuery] = useState('')

    useFetchArtsHome()

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <>
            {artsStore.isFetching && <Loader />}
            <Header header_type="home" />
            <Main>
                <Search onSearch={handleSearch} />
                <FoundArts
                    searchQuery={searchQuery}
                    arts={artsStore.arts}
                />
                <ArtsGrid dataType={'random'} />
            </Main>
            <Footer />
        </>
    )
}

const Home = observer(HomeComponent)
export { Home }
