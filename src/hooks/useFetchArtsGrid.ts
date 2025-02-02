import { useContext, useEffect } from "react"

import { FAVORITES, RANDOM } from "@/constants/artsGridTypes"
import { Context } from "@/main"
import IUseFetchArtsGrid from "@/types/IHooks/IUseFetchArtsGrid"
import Favorites from "@/utils/favorites"

export function useFetchArtsGrid({
        dataType,
        AMOUNT_TO_FETCH,
        AMOUNT_TO_GET,
        setArts,
        setSortedArts
    } : IUseFetchArtsGrid){
    const {artsStore} = useContext(Context)

    useEffect(() => {
        const fetchRandomArts = async () => {
            const response = await artsStore.getRandom(AMOUNT_TO_FETCH, AMOUNT_TO_GET)
            if (response) {
                setArts(response)
                setSortedArts(response)
            }
        }

        const fetchFavorites = async () => {
            const favorites = Favorites.getFavorites()
            if (favorites.length === 0) return

            const response = await artsStore.getFavorites(favorites)
            if (response) {
                setArts(response)
                setSortedArts(response)
            }
        }

        if (dataType === RANDOM) {
            fetchRandomArts()
        } else if (dataType === FAVORITES) {
            fetchFavorites()
        }
    }, [])
}