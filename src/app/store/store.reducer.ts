import { CLEAR_SELECTED_BLOG_ITEM_TYPES, SELECT_BLOG_ITEM_TYPE, StoreActions } from './store.actions';
import { Set } from 'immutable';
import { BlogItemTopic } from '../models/blog-item-topic';

export interface StoreState {
    selectedBlogItemTypes: Set<BlogItemTopic>
}

export const INITIAL_STORE_STATE: StoreState = {
    selectedBlogItemTypes: Set()
};

export function storeReducer(state: StoreState = INITIAL_STORE_STATE,
                             action: StoreActions): StoreState {
    switch (action.type) {
        case SELECT_BLOG_ITEM_TYPE:
            return {
                ...state,
                selectedBlogItemTypes: state.selectedBlogItemTypes.add(action.payload)
            };
        case CLEAR_SELECTED_BLOG_ITEM_TYPES:
            return {
                ...state,
                selectedBlogItemTypes: Set()
            };
        default:
            return state;
    }
}
