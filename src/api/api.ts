import axios from "axios"

const API_URL = 'https://api.artic.edu/api/v1/artworks'

export { API_URL } ;

const $api = axios.create({
    baseURL: API_URL
})

export default $api;