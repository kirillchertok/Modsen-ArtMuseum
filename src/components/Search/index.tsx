import React, { useCallback, useState } from 'react'
import './styles.scss'
import Section from '@/components/Section'
import Input from '@/components/Input'
import Img from '@/components/Img'
import searchIcon from '@/assets/images/search.png'
import { Formik, Form } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

interface ISearch {
    onSearch: (str: string) => void
}

const searchSchema = z.object({
    query: z.string().min(1, 'Search query cannot be empty')
})

function Search({ onSearch }: ISearch) {
    const [debounceTimer, setDebounceTimer] = useState<number | null>(null)

    const handleDebouncedSearch = useCallback(
        (query: string) => {
            if (debounceTimer) clearTimeout(debounceTimer)
            const timer = window.setTimeout(() => {
                onSearch(query)
            }, 1000)
            setDebounceTimer(timer)
        },
        [debounceTimer, onSearch]
    )

    return (
        <>
            <Section className="search">
                <h1 className="search__header">
                    Let's find some
                    <span className="search__header--highlight"> art</span> here!
                </h1>
                <Formik
                    initialValues={{ query: '' }}
                    validationSchema={toFormikValidationSchema(searchSchema)}
                    onSubmit={() => {
                        // No need for actual form submission
                    }}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <Input
                                name="query"
                                value={values.query}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const newValue = e.target.value
                                    handleChange(e)
                                    handleDebouncedSearch(newValue)
                                }}
                                input_type="icon_text"
                                icon={<Img src={searchIcon} />}
                                className="search__input"
                                placeholder="Search Art, Artist, Work"
                            />
                        </Form>
                    )}
                </Formik>
            </Section>
        </>
    )
}

export default Search
