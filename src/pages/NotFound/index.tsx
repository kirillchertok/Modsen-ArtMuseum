import './styles.scss'
import { Header } from '@/components/ui/Header'
import { Main } from '@/components/ui/Main'
import { Footer } from '@/components/ui/Footer'

export function NotFound() {
    return (
        <>
            <Header header_type="not-found" />
            <Main>
                <div className="not-found">
                    <h1 className="not-found__h1">Page is not found</h1>
                    <h3 className="not-found__h3">Please check if the url is correct</h3>
                </div>
            </Main>
            <Footer />
        </>
    )
}
