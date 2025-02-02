import { Details } from '@/pages/Details'
import { Favorites } from '@/pages/Favorites'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

const ROUTES = [
    { path: '/', element: <Home /> },
    { path: '/details/:id', element: <Details /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '*', element: <NotFound /> }
]

export { ROUTES }
