import { IArt } from "../IArt";

export default interface IUseFetchArtsGrid{
    dataType: 'random' | 'favorites',
    AMOUNT_TO_FETCH: number,
    AMOUNT_TO_GET: number,
    setArts: (arts: IArt[]) => void,
    setSortedArts: (arts: IArt[]) => void
}