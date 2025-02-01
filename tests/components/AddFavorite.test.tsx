import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Favorites from '../../utils/favourites'
import AddFavorite from '../AddFavorite'

jest.mock('../../utils/favourites')

describe('AddFavorite Component', () => {
    const artId = 123

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders correctly when art is not in favorites', () => {
        ;(Favorites.checkInclude as jest.Mock).mockReturnValue(false)

        render(<AddFavorite artId={artId} />)

        const container = screen.getByRole('button')
        expect(container).toBeInTheDocument()

        expect(container).toHaveClass('favorite__image-container--not-in')
    })

    it('renders correctly when art is in favorites', () => {
        ;(Favorites.checkInclude as jest.Mock).mockReturnValue(true)

        render(<AddFavorite artId={artId} />)

        const container = screen.getByRole('button')
        expect(container).toBeInTheDocument()

        expect(container).toHaveClass('favorite__image-container--in')
    })

    it('adds art to favorites when clicked and not in favorites', async () => {
        ;(Favorites.checkInclude as jest.Mock).mockReturnValue(false)

        render(<AddFavorite artId={artId} />)

        const container = screen.getByRole('button')
        await userEvent.click(container)

        expect(Favorites.addToFavorite).toHaveBeenCalledWith(artId)

        expect(container).toHaveClass('favorite__image-container--in')
    })

    it('removes art from favorites when clicked and in favorites', async () => {
        ;(Favorites.checkInclude as jest.Mock).mockReturnValue(true)

        render(<AddFavorite artId={artId} />)

        const container = screen.getByRole('button')
        await userEvent.click(container)

        expect(Favorites.removeFromFavorite).toHaveBeenCalledWith(artId)

        expect(container).toHaveClass('favorite__image-container--not-in')
    })

    it('applies additional class names correctly', () => {
        ;(Favorites.checkInclude as jest.Mock).mockReturnValue(false)

        render(
            <AddFavorite
                artId={artId}
                className="custom-class"
            />
        )

        const container = screen.getByRole('button').parentElement
        expect(container).toHaveClass('custom-class')
    })
})
