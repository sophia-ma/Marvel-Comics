import { Character } from './Character';

export interface CharacterResponse {
    count: number;
    next: string;
    previous: string;
    results: Character[];
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: CharacterDataContainer;
}

export interface CharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
}
