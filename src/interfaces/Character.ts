import { Url } from 'url';
import { Story } from './Story';
import { BaseList } from './BaseList';
import { Thumbnail } from './Thumbnail';

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: string | Date;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: BaseList;
    series: BaseList;
    stories: Story;
    events: BaseList;
    urls: Url[];
}
