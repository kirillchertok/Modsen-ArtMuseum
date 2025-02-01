import { Details } from '@/pages/Details'
import { Favorites } from '@/pages/Favorites'
import { Home } from '@/pages/Home'

const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '/details/:id', element: <Details /> },
    { path: '/favorites', element: <Favorites /> }
]

export { ROUTES }
