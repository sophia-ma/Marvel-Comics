export interface BaseList {
    available: number;
    collectionURI: string;
    items: BaseSummary[];
    returned: number;
}

export interface BaseSummary {
    resourceURI: string;
    name: string;
}
