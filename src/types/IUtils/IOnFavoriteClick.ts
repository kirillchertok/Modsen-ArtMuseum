export default interface IOnFavoriteClick{
    favorite: boolean
    setFavorite: (state: boolean) => void
    artId: number
}