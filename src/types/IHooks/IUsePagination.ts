export interface IUsePagination {
    pages: number[]
    setPages: (pages: number[]) => void
    PAGE_INTERVAL_LENGTH: number
}