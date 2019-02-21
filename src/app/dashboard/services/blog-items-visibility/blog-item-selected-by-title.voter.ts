import { BlogItemSelectedVoter } from './blog-item-selected.voter';
import { Injectable } from '@angular/core';
import { StoreState } from '../../store/store.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlogItem } from '../../models/blog-item';
import { fromStoreSelectors } from '../../store/store.selectors';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable()
export class BlogItemSelectedByTitleVoter implements BlogItemSelectedVoter {

    constructor(private readonly store$: Store<StoreState>) {
    }

    public vote(blogItem: BlogItem): Observable<boolean> {
        this.checkParameter(blogItem);
        return this.store$.pipe(
            select(fromStoreSelectors.getSearchedBlogItemTitle),
            map((searchedBlogItemTitle: string) =>
                isNullOrUndefined(searchedBlogItemTitle) || searchedBlogItemTitle.length === 0
                    ? true
                    : blogItem.title.toUpperCase().includes(searchedBlogItemTitle.toUpperCase())
            ));
    }

    private checkParameter(blogItem: BlogItem) {
        if (isNullOrUndefined(blogItem) || isNullOrUndefined(blogItem.title)) {
            throw new Error('BlogItem or BlogItem.title was not defined. Failed to register voter');
        }
    }
}
