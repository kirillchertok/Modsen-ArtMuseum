import IArtsGridHeaders from '@/types/IComponents/IArtsGridHeaders'

export function ArtsGridHeaders({ first, second }: IArtsGridHeaders) {
    return (
        <>
            <h3 className="arts__headers--first">{first}</h3>
            <h1 className="arts__headers--second">{second}</h1>
        </>
    )
}
