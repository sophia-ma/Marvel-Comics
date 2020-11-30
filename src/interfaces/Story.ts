import { BaseList, BaseSummary } from './BaseList';

export interface Story extends BaseList {
    items: StorySummary[];
}

export interface StorySummary extends BaseSummary {
    type: string;
}
