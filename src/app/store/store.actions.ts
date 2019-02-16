import { Action } from '@ngrx/store';
import { BlogItemTopic } from '../models/blog-item-topic';

export const TOGGLE_BLOG_ITEM_TOPIC = 'TOGGLE_BLOG_ITEM_TOPIC';

export class ToggleBlogItemTopic implements Action {
    public readonly type = TOGGLE_BLOG_ITEM_TOPIC;

    constructor(public readonly payload: BlogItemTopic) {
    }
}

export type StoreActions = ToggleBlogItemTopic;
