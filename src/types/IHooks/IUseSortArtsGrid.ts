import { IArt } from "../IArt"

export interface IUseSortArtsProps {
    arts: IArt[]
    setSortedArts: (arts: IArt[]) => void
}