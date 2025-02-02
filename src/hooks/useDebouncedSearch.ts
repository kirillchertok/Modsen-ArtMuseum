import { useCallback, useState } from "react"

import { IUseDebouncedSearch } from "@/types/IHooks/IUseDebouncedSearch"

export function useDebouncedSearch({ onSearch, delay = 1000 }: IUseDebouncedSearch) {
    const [debounceTimer, setDebounceTimer] = useState<number | null>(null)

    const handleDebouncedSearch = useCallback(
        (query: string) => {
            if (debounceTimer) clearTimeout(debounceTimer)
            const timer = window.setTimeout(() => {
                onSearch(query)
            }, delay)
            setDebounceTimer(timer)
        },
        [debounceTimer, onSearch, delay]
    )

    return { handleDebouncedSearch }
}