import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './global.scss'
import Details from './pages/Details'
import Favorites from './pages/Favorites'

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/details/:id"
                    element={<Details />}
                />
                <Route
                    path="/favorites"
                    element={<Favorites />}
                />
            </Routes>
        </>
    )
}

export default App
