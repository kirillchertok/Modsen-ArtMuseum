import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import ArtsStore from '@/store/ArtsStore.ts'

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
