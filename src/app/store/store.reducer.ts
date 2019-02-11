import { CLEAR_SELECTED_BLOG_ITEM_TYPES, SELECT_BLOG_ITEM_TYPE, StoreActions } from './store.actions';
import { BlogItemTypeIdentifier } from '../models/blog-item-type';
import { Set } from 'immutable';

export interface StoreState {
    selectedBlogItemTypes: Set<BlogItemTypeIdentifier>
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
                selectedBlogItemTypes: state.selectedBlogItemTypes.add(action.payload.getIdentifier())
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
