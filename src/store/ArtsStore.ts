import { makeAutoObservable } from "mobx";
import { IArt, IPagination } from "../services/interfaces/IArt";
import Arts from "../services/arts";

export default class ArtsStore{
    isFetching = false;
    imgUrl = "";
    arts: IArt[] = [];
    pagination: IPagination = {
        current_page: 0,
        next_url: "",
        prev_url: "",
        total_pages: 0
    };

    constructor(){
        makeAutoObservable(this)
    }

    setIsFetching(state: boolean){
        this.isFetching = state;
    }

    setImgUrl(state: string){
        this.imgUrl = state;
    }

    setArts(state: IArt[]){
        const artsSection = document.querySelector('.arts')
        if (!artsSection) return

        state.forEach((art) => {
            art.image_url = art.image_id ? this.imgUrl + '/' + art.image_id + `/full/${Math.ceil(artsSection.clientWidth / 3)},/0/default.jpg` : ''
        })
        this.arts = state;
    }

    setPagination(state: IPagination){
        this.pagination = state;
        sessionStorage.setItem('currentPage', state.current_page.toString())
    }

    setData(imgUrl: string, arts: IArt[], pagination: IPagination){
        this.setImgUrl(imgUrl)
        this.setArts(arts)
        this.setPagination(pagination)
    }

    async initialFetch(){
        try{
            this.setIsFetching(true)
            const currentPage = Number(sessionStorage.getItem('currentPage')) || 1;
            const query = sessionStorage.getItem('query') || undefined;
            const response = await Arts.getArts(currentPage, query);
            if (response){
                this.setIsFetching(false)
            }
            this.setData(response.data.config.iiif_url, response.data.data, response.data.pagination)
        }
        catch (e){
            console.log(e)
        }
    }

    async nextPage(){
        try{
            if (!this.pagination.total_pages) throw new Error('No data in pagination')

            this.setIsFetching(true)
            const page = this.pagination.current_page == this.pagination.total_pages ? 1 : this.pagination.current_page + 1
            const query = sessionStorage.getItem('query') || undefined;
            const response = await Arts.getArts(page, query)
            if (response){
                this.setIsFetching(false)
            }
            this.setData(response.data.config.iiif_url, response.data.data, response.data.pagination)
        }
        catch(e){
            console.log(e)
        }
    }

    async prevPage(){
        try{
            if (!this.pagination.total_pages) throw new Error('No data in pagination')

            this.setIsFetching(true)
            const page = this.pagination.current_page == 1 ? this.pagination.total_pages : this.pagination.current_page - 1
            const query = sessionStorage.getItem('query') || undefined;
            const response = await Arts.getArts(page, query)
            if (response){
                this.setIsFetching(false)
            }
            this.setData(response.data.config.iiif_url, response.data.data, response.data.pagination)
        }
        catch (e){
            console.log(e)
        }
    }

    async goToPage(page: number){
        try{
            if (!this.pagination.total_pages) throw new Error('No data in pagination')

            this.setIsFetching(true)
            const query = sessionStorage.getItem('query') || undefined;
            const response = await Arts.getArts(page, query)
            if (response){
                this.setIsFetching(false)
            }
            this.setData(response.data.config.iiif_url, response.data.data, response.data.pagination)
        }
        catch (e){
            console.log(e)
        }
    }

    async getRandom(limit: number, amountToGet: number){
        try{
            this.setIsFetching(true)
            const response = await Arts.getArtsForRandom(limit)
            if (response){
                this.setIsFetching(false)
            }

            const artworks = response.data.data;
            if (!artworks || artworks.length === 0) {
                throw new Error("No artworks found");
            }

            const shuffled = artworks.sort(() => Math.random() - 0.5);
            const randomArtworks = shuffled.slice(0, amountToGet);

            randomArtworks.forEach((art) => {
                art.image_url = art.image_id ? response.data.config.iiif_url + '/' + art.image_id + '/full/80,80/0/default.jpg' : ''
            })
            return randomArtworks;
        }
        catch (e){
            console.log(e)
        }
    }

    async getDetails(id: number){
        try{
            this.setIsFetching(true)
            const response = await Arts.getDetails(id)
            if(response){
                this.setIsFetching(false)
            }

            const artwork = response.data.data

            const main = document.querySelector('main')
            const imageWidth = Math.round(main.clientWidth / 3)

            artwork.image_url = artwork.image_id ? response.data.config.iiif_url + '/' + artwork.image_id + `/full/${imageWidth},/0/default.jpg` : ''
            return artwork
        }
        catch (e: any){
            if(e.status == 404){
                return "No artwork with this id"
            }
            else{
                console.log(e)
            }
        }
    }

    async getFavorites(ids: number[]){
        try{
            this.setIsFetching(true)
            const response = await Arts.getFavorites(ids.join(','))
            if(response){
                this.setIsFetching(false)
            }

            const artworks = response.data.data;
            if (!artworks || artworks.length === 0) {
                throw new Error("No artworks found");
            }

            artworks.forEach((art) => {
                art.image_url = art.image_id ? response.data.config.iiif_url + '/' + art.image_id + '/full/80,80/0/default.jpg' : ''
            })
            return artworks;
        }
        catch (e){
            console.log(e)
        }
    }
}