import { useContext, useEffect } from "react"

import { Context } from "@/main"
import { IUseSortArtsProps } from "@/types/IHooks/IUseSortArtsGrid"

export function useSortArts({ arts, setSortedArts }: IUseSortArtsProps) {
    const {artsStore} = useContext(Context)

    useEffect(() => {
        const selectedParameter = artsStore.sortParameter
        const sortedArts = [...arts]

        if (selectedParameter !== 'no_sort') {
            sortedArts.sort((a, b) => {
                const valA = a[selectedParameter]?.toString().toLowerCase() || ''
                const valB = b[selectedParameter]?.toString().toLowerCase() || ''
                return valA.localeCompare(valB)
            })
        }

        setSortedArts(sortedArts)
    }, [artsStore.sortParameter, arts])
}