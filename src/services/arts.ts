import { AxiosResponse } from "axios";

import $api from "@/api/api";
import { IArtResponse, IArtsResponse, IFavoriteArts } from "@/types/IArt";
import { getArtsForRandomUrl, getArtsUrl, getDetailsUrl, getFavoritesUrl } from "@/utils/fetchArts";

export default class Arts{
    static async getArts(page: number, query?: string, limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(getArtsUrl(page, query, limit))
    }

    static async getArtsForRandom(limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(getArtsForRandomUrl(limit))
    }

    static async getDetails(id: number): Promise<AxiosResponse<IArtResponse>>{
        return $api.get<IArtResponse>(getDetailsUrl((id)))
    }

    static async getFavorites(ids: string) : Promise<AxiosResponse<IFavoriteArts>>{
        return $api.get<IFavoriteArts>(getFavoritesUrl(ids))
    }
}