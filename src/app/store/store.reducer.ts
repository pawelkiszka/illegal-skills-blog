import { StoreActions, TOGGLE_BLOG_ITEM_TOPIC } from './store.actions';
import { Set } from 'immutable';
import { BlogItemTopic } from '../models/blog-item-topic';

export interface StoreState {
    selectedBlogItemTypes: Set<BlogItemTopic>
    searchedBlogItemTitle: string;
}

export const INITIAL_STORE_STATE: StoreState = {
    selectedBlogItemTypes: Set(),
    searchedBlogItemTitle: undefined
};

export function storeReducer(state: StoreState = INITIAL_STORE_STATE,
                             action: StoreActions): StoreState {
    switch (action.type) {
        case TOGGLE_BLOG_ITEM_TOPIC:
            const blogItemTopic: BlogItemTopic = action.payload;
            return state.selectedBlogItemTypes.has(blogItemTopic)
                ? removeFromStore(state, blogItemTopic)
                : addToStore(state, blogItemTopic);
        default:
            return state;
    }
}

function removeFromStore(currentState: StoreState, blogItemTopic: BlogItemTopic): StoreState {
    return {
        ...currentState,
        selectedBlogItemTypes: currentState.selectedBlogItemTypes.delete(blogItemTopic)
    }
}

function addToStore(currentState: StoreState, blogItemTopic: BlogItemTopic): StoreState {
    return {
        ...currentState,
        selectedBlogItemTypes: currentState.selectedBlogItemTypes.add(blogItemTopic)
    }
}
