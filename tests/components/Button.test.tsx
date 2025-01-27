import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../../src/components/Button'
import '@testing-library/jest-dom'

describe('Button Component', () => {
    it('renders text button correctly', () => {
        render(
            <Button
                button_type="text"
                text="Click Me"
            />
        )
        expect(screen.getByText('Click Me')).toBeInTheDocument()
    })

    it('renders icon button correctly', () => {
        const icon = <span>Icon</span>
        render(
            <Button
                button_type="icon"
                icon={icon}
            />
        )
        expect(screen.getByText('Icon')).toBeInTheDocument()
    })

    it('renders icon with text button correctly', () => {
        const icon = <span>Icon</span>
        render(
            <Button
                button_type="icon_text"
                icon={icon}
                text="Click Me"
            />
        )
        expect(screen.getByText('Icon')).toBeInTheDocument()
        expect(screen.getByText('Click Me')).toBeInTheDocument()
    })

    it('calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        render(
            <Button
                button_type="text"
                text="Click Me"
                onClick={handleClick}
            />
        )
        userEvent.click(screen.getByText('Click Me'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('applies additional class names correctly', () => {
        render(
            <Button
                button_type="text"
                text="Click Me"
                className="custom-class"
            />
        )
        const button = screen.getByText('Click Me')
        expect(button).toHaveClass('custom-class')
        expect(button).toHaveClass('button')
    })
})
