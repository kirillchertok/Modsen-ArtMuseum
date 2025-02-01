import { IArt } from "../IArt"

export interface IUseFetchArt{
    id: string | undefined
    setArt: (art: IArt) => void
    setError: (error: string) => void
}