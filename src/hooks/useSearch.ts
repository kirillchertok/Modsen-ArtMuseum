import { useContext, useEffect } from "react";

import { Context } from "@/main";
import { IUseSearch } from "@/types/IHooks/IUseSearch";

export function useSearch({ searchQuery } : IUseSearch){
    const {artsStore} = useContext(Context)

    useEffect(() => {
        if (sessionStorage.getItem('query')) sessionStorage.removeItem('query')
        if (searchQuery) sessionStorage.setItem('query', searchQuery)

        artsStore.initialFetch()
    }, [searchQuery])
}