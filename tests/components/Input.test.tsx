import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import Input from '../../src/components/Input'

describe('Input Component', () => {
    it('renders text input correctly', () => {
        render(
            <Input
                input_type="text"
                placeholder="Enter text"
            />
        )
        const inputElement = screen.getByPlaceholderText('Enter text')
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveClass('input')
        expect(inputElement).toHaveClass('input--text')
    })

    it('renders icon with text input correctly', () => {
        const icon = <span>Icon</span>
        render(
            <Input
                input_type="icon_text"
                icon={icon}
                placeholder="Enter text"
            />
        )
        const inputElement = screen.getByPlaceholderText('Enter text')
        const iconElement = screen.getByText('Icon')

        expect(inputElement).toBeInTheDocument()
        expect(iconElement).toBeInTheDocument()
        expect(inputElement).toHaveClass('input')
        expect(inputElement).toHaveClass('input--icon_text')
    })

    it('focuses input when icon is clicked', async () => {
        const icon = <span>Icon</span>
        render(
            <Input
                input_type="icon_text"
                icon={icon}
                placeholder="Enter text"
            />
        )
        const inputElement = screen.getByPlaceholderText('Enter text')
        const iconElement = screen.getByText('Icon')

        await userEvent.click(iconElement)

        expect(inputElement).toHaveFocus()
    })

    it('applies additional class names correctly', () => {
        render(
            <Input
                input_type="text"
                placeholder="Enter text"
                className="custom-class"
            />
        )
        const containerElement = screen.getByPlaceholderText('Enter text').parentElement
        expect(containerElement).toHaveClass('custom-class')
    })

    it('passes additional attributes to the input', () => {
        render(
            <Input
                input_type="text"
                placeholder="Enter text"
                data-testid="custom-input"
            />
        )
        const inputElement = screen.getByTestId('custom-input')
        expect(inputElement).toBeInTheDocument()
    })
})
