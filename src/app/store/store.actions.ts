import { Action } from '@ngrx/store';
import { BlogItemTopic } from '../models/blog-item-topic';

export const TOGGLE_BLOG_ITEM_TOPIC = 'TOGGLE_BLOG_ITEM_TOPIC';
export const PERSIST_SEARCHED_TITLE_VALUE = 'PERSIST_SEARCHED_TITLE_VALUE';
export const CLEAR_SEARCHED_TITLE_VALUE = 'CLEAR_SEARCHED_TITLE_VALUE';

export class ToggleBlogItemTopic implements Action {
    public readonly type = TOGGLE_BLOG_ITEM_TOPIC;

    constructor(public readonly payload: BlogItemTopic) {
    }
}

export class PersistSearchedTitleValue implements Action {
    public readonly type = PERSIST_SEARCHED_TITLE_VALUE;

    constructor(public readonly payload: string) {
    }
}

export class ClearSearchedTitleValue implements Action {
    public readonly type = CLEAR_SEARCHED_TITLE_VALUE;
}

export type StoreActions =
    ToggleBlogItemTopic
    | PersistSearchedTitleValue
    | ClearSearchedTitleValue;
