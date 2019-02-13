import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StoreState } from './store.reducer';
import { BlogItemTopic } from '../models/blog-item-topic';

const getStoreState = createFeatureSelector<StoreState>('store');

const isBlogItemTopicSelected = (blogItemTopic: BlogItemTopic) => createSelector(
    getStoreState,
    (state: StoreState) => state.selectedBlogItemTypes.contains(blogItemTopic)
);

export const fromStoreSelectors = {
    isBlogItemTypeSelected: isBlogItemTopicSelected
};
