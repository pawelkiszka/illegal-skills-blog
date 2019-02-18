import { BlogItemSelectedVoter } from './blog-item-selected.voter';
import { Injectable } from '@angular/core';
import { StoreState } from '../../store/store.reducer';
import { select, Store } from '@ngrx/store';
import { iif, Observable, of } from 'rxjs';
import { BlogItem } from '../../models/blog-item';
import { fromStoreSelectors } from '../../store/store.selectors';
import { switchMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable()
export class BlogItemSelectedByTitleVoter implements BlogItemSelectedVoter {

    constructor(private readonly store$: Store<StoreState>) {
    }

    public vote(blogItem: BlogItem): Observable<boolean> {
        this.checkParameter(blogItem);
        return this.store$.pipe(
            select(fromStoreSelectors.getSearchedBlogItemTitle),
            switchMap((searchedBlogItemTitle: string) => iif(
                () => isNullOrUndefined(searchedBlogItemTitle) || searchedBlogItemTitle.length === 0,
                of(true),
                of(blogItem.title.includes(searchedBlogItemTitle))
            ))
        );
    }

    private checkParameter(blogItem: BlogItem) {
        if (isNullOrUndefined(blogItem) || isNullOrUndefined(blogItem.title)) {
            throw new Error('BlogItem or BlogItem.title was not defined. Failed to register voter');
        }
    }
}