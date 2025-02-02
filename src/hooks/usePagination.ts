import { useContext, useEffect } from "react"

import { Context } from "@/main"
import { IUsePagination } from "@/types/IHooks/IUsePagination"

export function usePagination({ pages, setPages, PAGE_INTERVAL_LENGTH }: IUsePagination) {
    const {artsStore} = useContext(Context)

    useEffect(() => {
        const currentPage = Number(
            sessionStorage.getItem('currentPage') || artsStore.pagination.current_page
        )
        const pageInterval = Math.min(artsStore.pagination.total_pages, PAGE_INTERVAL_LENGTH)

        if (
            currentPage - 1 === pages[pages.length - 1] ||
            currentPage + 1 === pages[0] ||
            pages.length === 0
        ) {
            setPages(Array.from({ length: pageInterval }, (_, i) => currentPage + i))
        }
    }, [artsStore.pagination.current_page])
}