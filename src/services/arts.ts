import { AxiosResponse } from "axios";
import $api, { API_URL } from "../api/api";
import { IArtResponse, IArtsResponse, IFavoriteArts } from "./interfaces/IArt";
import { ARTS_PER_PAGE } from "../constants/pagination";
import { DETAILED_FIELDS_TO_FETCH, FIELDS_TO_FETCH } from "../constants/artsFetch";

export default class Arts{
    static async getArts(page: number, query?: string, limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(`${API_URL}${query ? "/search" : ""}?${query ? `q=${query}&` : ''}page=${page}&limit=${limit || ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`)
    }

    static async getArtsForRandom(limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(`${API_URL}?limit=${limit || ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`)
    }

    static async getDetails(id: number): Promise<AxiosResponse<IArtResponse>>{
        return $api.get<IArtResponse>(`${API_URL}/${id}?fields=${DETAILED_FIELDS_TO_FETCH}`)
    }

    static async getFavorites(ids: string) : Promise<AxiosResponse<IFavoriteArts>>{
        return $api.get<IFavoriteArts>(`${API_URL}?ids=${ids}&fields=${FIELDS_TO_FETCH}`)
    }
}