export default class Favorites{
    static getFavorites(): number[]{
        if(!sessionStorage.getItem('favorites')) return []

        const favorites = sessionStorage.getItem('favorites')
        if (!favorites) return []

        return favorites.split(' ').map(fav => Number(fav))
    }

    static addToFavorite(id: number): void {
        if (!sessionStorage.getItem('favorites')) {
            sessionStorage.setItem('favorites', id.toString())
            return
        }

        const favorites = sessionStorage.getItem('favorites')
        sessionStorage.removeItem('favorites')
        sessionStorage.setItem('favorites', favorites + ` ${id}`)
    }

    static removeFromFavorite(id: number): void {
        if (!sessionStorage.getItem('favorites')) return

        const favorites = sessionStorage.getItem('favorites')
        if (!favorites) return

        sessionStorage.removeItem('favorites')
        sessionStorage.setItem(
            'favorites',
            favorites
                .split(' ')
                .filter((fav) => fav !== id.toString())
                .join(' ')
        )
    }

    static checkInclude(id: number): boolean {
        if (!sessionStorage.getItem('favorites')) return false

        const favorites = sessionStorage.getItem('favorites')
        if (!favorites) return false

        return favorites.split(' ').includes(id.toString())
    }

}