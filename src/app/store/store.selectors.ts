import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './store.reducer';

const getStoreState = createFeatureSelector<StoreState>('store');

const getSelectedBlogItemTopics = createSelector(
    getStoreState,
    (state: StoreState) => state.selectedBlogItemTypes.toArray()
);

export const fromStoreSelectors = {
    getSelectedBlogItemTopics
};
