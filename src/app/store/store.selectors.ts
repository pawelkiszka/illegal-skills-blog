import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './store.reducer';

const getStoreState = createFeatureSelector<StoreState>('store');

const getSelectedBlogItemTopics = createSelector(
    getStoreState,
    (state: StoreState) => state.selectedBlogItemTypes.toArray()
);

const getSearchedBlogItemTitle = createSelector(
    getStoreState,
    (state: StoreState) => state.searchedBlogItemTitle
);

export const fromStoreSelectors = {
    getSelectedBlogItemTopics,
    getSearchedBlogItemTitle
};
