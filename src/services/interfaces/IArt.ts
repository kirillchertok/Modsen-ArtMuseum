interface IArt{
    id: number;
    title: string;
    date_start: number;
    date_end: number;
    artist_title: string;
    place_of_origin: string;
    description: string;
    dimensions: string;
    credit_line: string;
    catalogue_display: string;
    image_id: string;
    image_url?: string;
    is_public_domain: boolean;
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

export type{
    IArt,
    IConfig,
    IPagination,
    IArtsResponse
}