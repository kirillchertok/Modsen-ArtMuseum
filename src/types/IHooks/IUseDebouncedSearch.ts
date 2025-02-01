export interface IUseDebouncedSearch {
    onSearch: (query: string) => void
    delay?: number
}