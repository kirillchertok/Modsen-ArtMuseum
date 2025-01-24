import { AxiosResponse } from "axios";
import $api, { API_URL } from "../api/api";
import { IArtsResponse } from "./interfaces/IArt";

export default class Arts{
    static async getArts(page: number, limit?: number): Promise<AxiosResponse<IArtsResponse>>{
        return $api.get<IArtsResponse>(`${API_URL}?page=${page}&limit=${limit || 3}&fields=id,title,date_start,date_end,artist_title,place_of_origin,description,dimensions,credit_line,catalogue_display,image_id,is_public_domain`)
    }
}