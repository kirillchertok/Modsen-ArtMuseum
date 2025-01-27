import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ArtsStore from './store/ArtsStore.ts'
import { createContext } from 'react'

const artsStore = new ArtsStore()
export const Context = createContext({
    artsStore
})

let container: HTMLElement | null = null
document.addEventListener('DOMContentLoaded', function () {
    if (!container) {
        container = document.getElementById('root')
        const root = createRoot(container!)

        root.render(
            <BrowserRouter>
                <Context.Provider
                    value={{
                        artsStore
                    }}
                >
                    <App />
                </Context.Provider>
            </BrowserRouter>
        )
    }
})
