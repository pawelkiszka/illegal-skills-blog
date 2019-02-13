import { Action } from '@ngrx/store';
import { BlogItemTopic } from '../models/blog-item-topic';

export const SELECT_BLOG_ITEM_TYPE = 'SELECT_BLOG_ITEM_TYPE';
export const CLEAR_SELECTED_BLOG_ITEM_TYPES = 'CLEAR_SELECTED_BLOG_ITEM_TYPES';


export class SelectBlogItemType implements Action {
    public readonly type = SELECT_BLOG_ITEM_TYPE;

    constructor(public readonly payload: BlogItemTopic) {
    }
}

export class ClearSelectedBlogItemType implements Action {
    public readonly type = CLEAR_SELECTED_BLOG_ITEM_TYPES;
}

export type StoreActions =
    SelectBlogItemType
    | ClearSelectedBlogItemType;
