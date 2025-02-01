import { API_URL } from "@/api/api";
import { DETAILED_FIELDS_TO_FETCH, FIELDS_TO_FETCH } from "@/constants/artsFetch";
import { ARTS_PER_PAGE } from "@/constants/pagination";

function getArtsUrl(page: number, query?: string, limit?: number){
    return `${API_URL}${query ? "/search" : ""}?${query ? `q=${query}&` : ''}page=${page}&limit=${limit || ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`
}

function getArtsForRandomUrl(limit?: number){
    return `${API_URL}?limit=${limit || ARTS_PER_PAGE}&fields=${FIELDS_TO_FETCH}`
}

function getDetailsUrl(id: number){
    return `${API_URL}/${id}?fields=${DETAILED_FIELDS_TO_FETCH}`
}

function getFavoritesUrl(ids: string){
    return `${API_URL}?ids=${ids}&fields=${FIELDS_TO_FETCH}`
}

export {
    getArtsForRandomUrl,
    getArtsUrl,
    getDetailsUrl,
    getFavoritesUrl
}