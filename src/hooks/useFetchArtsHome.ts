import { useContext, useEffect } from "react";

import { Context } from "@/main";

export function useFetchArtsHome(){
    const { artsStore } = useContext(Context)

    useEffect(() => {
        if (sessionStorage.getItem('query')) sessionStorage.removeItem('query')
        artsStore.initialFetch()
    }, [])
}