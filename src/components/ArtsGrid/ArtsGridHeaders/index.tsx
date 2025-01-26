interface IArtsGridHeaders {
    first: string
    second: string
}

function ArtsGridHeaders({ first, second }: IArtsGridHeaders) {
    return (
        <>
            <h3 className="arts__headers--first">{first}</h3>
            <h1 className="arts__headers--second">{second}</h1>
        </>
    )
}

export default ArtsGridHeaders
