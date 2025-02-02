import { useCallback,useState } from 'react'
import { z } from 'zod'

import { CHECK_LETTERS_AND_SPACES, CHECK_TWO_SPACE_IN_A_ROW } from '@/constants/inputRedex'
import { IUseSearchInput } from '@/types/IHooks/IUseSearchInput'

const searchSchema = z.object({
    query: z
        .string()
        .max(50, 'Maximum 50 characters')
        .regex(CHECK_LETTERS_AND_SPACES, 'Just letters and spaces')
        .regex(CHECK_TWO_SPACE_IN_A_ROW, 'Two spaces in a row are not allowed')
        .refine(val => val.trim().length > 0, { message: 'A field cannot contain only spaces' })
})

export function useSearchInput({ handleDebouncedSearch }: IUseSearchInput) {
    const [error, setError] = useState<string | null>(null)

    const onInputChange = useCallback(
        (
            e: React.ChangeEvent<HTMLInputElement>,
            handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        ) => {
            const newValue = e.target.value
            handleChange(e)

            const result = searchSchema.safeParse({ query: newValue })
            if (!result.success) {
                const errorMessage = result.error.format().query?._errors[0]
                
                if(newValue.length === 0){
                    handleDebouncedSearch(newValue)
                }
                else{
                    setError(errorMessage || 'Input error')

                    setTimeout(() => setError(null), 2000)
                }
            } else {
                setError(null)
                handleDebouncedSearch(newValue)
            }
        },
        [handleDebouncedSearch]
    )

    return { error, onInputChange }
}
