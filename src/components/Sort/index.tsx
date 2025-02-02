import './styles.scss'
<<<<<<< HEAD
import { HTMLAttributes, useContext } from 'react'
=======

import { observer } from 'mobx-react-lite'
import { useContext } from 'react'

>>>>>>> release/1.0.1
import { SORT_PARAMETERS } from '@/constants/sortParameters'
import { Context } from '@/main'
import ISort from '@/types/IComponents/ISort'
import removeClassFromAttrs from '@/utils/removeClassFromAttrs'

function SortComponent({ ...attrs }: ISort) {
    const { artsStore } = useContext(Context)
    const baseClass = 'sort'
    const attrsNoClass = removeClassFromAttrs(attrs)

    return (
        <>
            <div
                className={`${baseClass} ${attrs.className}`}
                {...attrsNoClass}
            >
                <label
                    htmlFor="sort-parameter"
                    className={`${baseClass}__label`}
                >
                    Sort parameter:{' '}
                </label>
                <select
                    value={artsStore.sortParameter}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
<<<<<<< HEAD
                        artsStore.setSortParameter(
                            e.target.value as 'title' | 'no_sort' | 'artist_title'
                        )
=======
                        artsStore.setSortParameter(e.target.value)
>>>>>>> release/1.0.1
                    }}
                    name="parameter"
                    id="sort-parameter"
                    className={`${baseClass}__select`}
                >
                    {SORT_PARAMETERS.map((parameter, index) => (
                        <option
                            key={index}
                            value={parameter.value}
                            className={`${baseClass}__select__option`}
                        >
                            {parameter.display}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

const Sort = observer(SortComponent)
export { Sort }
