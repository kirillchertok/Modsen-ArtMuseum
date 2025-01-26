interface IArt{
    id: number;
    title: string;
    date_display: string;
    artist_title: string;
    dimensions: string;
    credit_line: string;
    image_id: string;
    image_url?: string;
    is_public_domain: boolean;
    artist_display: string;
    department_title: string;
}

interface IConfig{
    iiif_url: string;
    website_url: string;
}

interface IPagination{
    current_page: number;
    next_url: string;
    prev_url: string;
    total_pages: number;
}

interface IArtsResponse{
    config: IConfig;
    data: IArt[];
    pagination: IPagination;
}

interface IArtResponse{
    data: IArt;
    config: IConfig;
}

interface IFavoriteArts{
    data: IArt[];
    config: IConfig;
}

export type{
    IArt,
    IConfig,
    IPagination,
    IArtsResponse,
    IArtResponse,
    IFavoriteArts
}