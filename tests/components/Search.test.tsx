import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from '../../src/components/Search'
import '@testing-library/jest-dom'

const mockOnSearch = jest.fn()

describe('Search Component', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.clearAllMocks()
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    it('renders correctly', () => {
        render(<Search onSearch={mockOnSearch} />)
        expect(screen.getByText("Let's find some")).toBeInTheDocument()
        expect(screen.getByText('art')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Search Art, Artist, Work')).toBeInTheDocument()
    })

    it('updates input value when typing', async () => {
        render(<Search onSearch={mockOnSearch} />)
        const inputElement = screen.getByPlaceholderText('Search Art, Artist, Work')

        await userEvent.type(inputElement, 'Van Gogh')

        expect(inputElement).toHaveValue('Van Gogh')
    })

    it('calls onSearch with debounce', async () => {
        render(<Search onSearch={mockOnSearch} />)
        const inputElement = screen.getByPlaceholderText('Search Art, Artist, Work')

        await userEvent.type(inputElement, 'Van Gogh')

        expect(mockOnSearch).not.toHaveBeenCalled()

        jest.advanceTimersByTime(1000)

        await waitFor(() => {
            expect(mockOnSearch).toHaveBeenCalledWith('Van Gogh')
        })
    })

    it('resets debounce timer on subsequent input', async () => {
        render(<Search onSearch={mockOnSearch} />)
        const inputElement = screen.getByPlaceholderText('Search Art, Artist, Work')

        await userEvent.type(inputElement, 'Van')
        jest.advanceTimersByTime(500)

        await userEvent.type(inputElement, ' Gogh')
        jest.advanceTimersByTime(1000)
        м
        await waitFor(() => {
            expect(mockOnSearch).toHaveBeenCalledTimes(1)
            expect(mockOnSearch).toHaveBeenCalledWith('Van Gogh')
        })
    })

    it('shows validation error if input is empty', async () => {
        render(<Search onSearch={mockOnSearch} />)
        const inputElement = screen.getByPlaceholderText('Search Art, Artist, Work')

        await userEvent.type(inputElement, 'Van Gogh')
        await userEvent.clear(inputElement)

        expect(screen.getByText('Search query cannot be empty')).toBeInTheDocument()
    })
})
