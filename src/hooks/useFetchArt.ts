import { useContext, useEffect } from "react";

import { Context } from "@/main";
import { IUseFetchArt } from "@/types/IHooks/IUseFetchArt";

export function useFetchArt({ id, setArt, setError }: IUseFetchArt){
    const { artsStore } = useContext(Context)

    useEffect(() => {
        const fetchArt = async (id: number) => {
            const response = await artsStore.getDetails(id)
            if (response) {
                if (response == 'No artwork with this id') {
                    setError(response)
                } else {
                    setArt(response)
                }
            }
        }

        if (id) {
            fetchArt(Number(id))
        } else {
            setError('No art to get, please enter id in search query')
        }
    }, [id])
}