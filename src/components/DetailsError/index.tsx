import './styles.scss'

interface IDetailsError {
    message: string
}

function DetailsError({ message }: IDetailsError) {
    return (
        <>
            <div className="detail-error__container">
                <h1>{message}</h1>
            </div>
        </>
    )
}

export default DetailsError
