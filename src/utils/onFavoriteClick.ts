import IOnFavoriteClick from "@/types/IUtils/IOnFavoriteClick";

import Favorites from "./favorites";

export function onFavoriteClick({ favorite, setFavorite, artId }: IOnFavoriteClick){
    if (favorite) {
        Favorites.removeFromFavorite(artId)
        setFavorite(false)
    } else {
        Favorites.addToFavorite(artId)
        setFavorite(true)
    }
}