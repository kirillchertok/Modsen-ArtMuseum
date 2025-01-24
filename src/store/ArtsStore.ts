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
        state.forEach((art) => {
            console.log(art)
            art.image_url = this.imgUrl + '/' + art.image_id + '/full/500,/0/default.jpg'
        })
        this.arts = state;
    }

    setPagination(state: IPagination){
        this.pagination = state;
    }

    setData(imgUrl: string, arts: IArt[], pagination: IPagination){
        this.setImgUrl(imgUrl)
        this.setArts(arts)
        this.setPagination(pagination)
    }

    async initialFetch(){
        try{
            this.setIsFetching(true)
            const response = await Arts.getArts(1);
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
            const response = await Arts.getArts(page)
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
            const response = await Arts.getArts(page)
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
            const response = await Arts.getArts(page)
            if (response){
                this.setIsFetching(false)
            }
            this.setData(response.data.config.iiif_url, response.data.data, response.data.pagination)
        }
        catch (e){
            console.log(e)
        }
    }
}