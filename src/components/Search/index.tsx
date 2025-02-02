import './styles.scss'

import { Form, Formik } from 'formik'
import React from 'react'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import searchIcon from '@/assets/images/search.png'
import { Img } from '@/components/ui/Img'
import { Input } from '@/components/ui/Input'
import { Section } from '@/components/ui/Section'
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch'
import { useSearchInput } from '@/hooks/useSearchInput'
import ISearch from '@/types/IComponents/ISearch'

const searchSchema = z.object({
    query: z.string().min(1, 'Search query cannot be empty')
})

export function Search({ onSearch }: ISearch) {
    const { handleDebouncedSearch } = useDebouncedSearch({ onSearch })

    const { error, onInputChange } = useSearchInput({ handleDebouncedSearch })

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
                    onSubmit={() => {}}
                >
                    {({ values, handleChange }) => (
                        <Form>
                            <Input
                                name="query"
                                value={values.query}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    onInputChange(e, handleChange)
                                }}
                                input_type="icon_text"
                                icon={<Img src={searchIcon} />}
                                className="search__input"
                                placeholder="Search Art, Artist, Work"
                            />
                            {error && <div className="search__error">{error}</div>}
                        </Form>
                    )}
                </Formik>
            </Section>
        </>
    )
}
