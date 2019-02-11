import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StoreState } from './store.reducer';
import { BlogItemType } from '../models/blog-item-type';

const getStoreState = createFeatureSelector<StoreState>('store');

const isBlogItemTypeSelected = (blogItemType: BlogItemType) => createSelector(
    getStoreState,
    (state: StoreState) => state.selectedBlogItemTypes.contains(blogItemType.getIdentifier())
);

export const fromStoreSelectors = {
    isBlogItemTypeSelected
};
