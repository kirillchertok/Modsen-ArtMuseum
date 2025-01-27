import removeClassFromAttrs from '@/utils/removeClassFromAttrs'
import './styles.scss'
import { HTMLAttributes, useContext } from 'react'
import { SORT_PARAMETERS } from '@/constants/sortParameters'
import { Context } from '@/main'
import { observer } from 'mobx-react-lite'

interface ISort extends HTMLAttributes<HTMLElement> {
    [key: string]: any
}

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
                        artsStore.setSortParameter(
                            e.target.value as 'title' | 'no_sort' | 'artist_title'
                        )
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
export default Sort
