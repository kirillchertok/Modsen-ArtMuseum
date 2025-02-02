import './styles.scss'

import IDetailsError from '@/types/IComponents/IDetailsError'

export function DetailsError({ message }: IDetailsError) {
    return (
        <>
            <div className="detail-error__container">
                <h1>{message}</h1>
            </div>
        </>
    )
}
