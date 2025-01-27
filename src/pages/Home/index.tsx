import { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'
import './styles.scss'
import Search from '../../components/Search'
import FoundArts from '../../components/FoundArts'
import { observer } from 'mobx-react-lite'
import { Context } from '../../main'
import ArtsGrid from '../../components/ArtsGrid'
import Loader from '@/components/Loader'

function HomeComponent() {
    const { artsStore } = useContext(Context)

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('query')) sessionStorage.removeItem('query')
        artsStore.initialFetch()
    }, [])

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
export default Home
