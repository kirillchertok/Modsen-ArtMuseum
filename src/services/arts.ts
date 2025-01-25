import { AxiosResponse } from "axios";
import $api, { API_URL } from "../api/api";
import { IArtsResponse } from "./interfaces/IArt";
import { ARTS_PER_PAGE } from "../constants/pagination";
import { FIELDS_TO_FETCH } from "../constants/arts";

export default class Arts{
    static async getArts(page: number, query?: string, limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(`${API_URL}${query ? "/search" : ""}?${query ? `q=${query}&` : ''}page=${page}&limit=${limit || ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`)
    }

    static async getArtsForRandom(limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(`${API_URL}?limit=${limit || ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`)
    }
}